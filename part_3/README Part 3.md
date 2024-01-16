# Part 3: TimescaleDB - Node.js + express + sequelize. Database set up for MQTT data from temp sensors

Tutorial URL
https://docs.timescale.com/quick-start/latest/node/

Purpose of this phase is to establish the table model to use in the next phase.


## Database for part 3

Step 1 - create docker postgres container

```shell
docker run -d --name timescaledb-3 -p 5432:5432 -e POSTGRES_PASSWORD=password timescale/timescaledb:2.13.1-pg16
```

Step 2 - set up node

```shell
npm init -y
```

Step 3 - install dependencies
I will try omitting pg-hstore this time around

```shell
npm install express sequelize sequelize-cli pg pg-hstore
```

Step 4 - create index.js in root project directory with the below code

```shell
const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```

Step 5 - Add the following to index.js

Modify connection to DB according to below

'postgres://username:password@example.com:5432/dbname'

'postgres://postgres:password@localhost:5432/postgres'

```shell
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
```

Part 6 - After apt.get in index.js, add this code to check db connection

```shell
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
```

Part 7 - Initialize sequelize

Info on initiation process
https://github.com/matt-scott/practice-for-week-11-combining-express-sequelize-short-practice


```shell
npx sequelize init
```

Part 8 - Modify config/config.json

In the future - need to install dotenv, dotenv-cli?
Install nodemon to avoid restarting express during dev

```shell
  "development": {
    "username": "postgres",
    "password": "password",
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
```


Part 9 - Create table model and migration files

Example temp data

    {
        timestamp: 1705299225000,
        sensor_location: 'dining',
        measurement_type: 'temperature',
        battery: 100,
        humidity: 34.48,
        linkquality: 255,
        power_outage_count: 9,
        pressure: 983.2,
        temperature: 24.34,
        voltage: 3115
    }

```shell
npx sequelize model:generate --name temperature_sensor_data \
--attributes timestamp:date,sensor_location:string,measurement_type:string,battery:integer,humidity:decimal,linkquality:integer,power_outage_count:integer,pressure:decimal,temperature:decimal,voltage:integer
```

Part 10 - Modify model and migration files according to needs

See migration and model file for modifications to these files
temperature_sensor_data

Part 11 - run sequelize migrate

```shell
npx sequelize db:migrate
```

Part 12 - create a hypertable

```shell
npx sequelize migration:generate --name add_hypertable
```

Part 13 - modify hypertable migration

```shell
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("SELECT create_hypertable('page_loads', by_range('time'));");
  },

  down: (queryInterface, Sequelize) => {
  }
};
```

Part 14 - migrate hypertable

```shell
npx sequelize db:migrate
```