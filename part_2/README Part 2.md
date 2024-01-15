# Part 2: Setting up an instance of TimescaleDB within Node.js utilizing express and sequelize.

Tutorial URL
https://docs.timescale.com/quick-start/latest/node/


## Database for part 2

```shell
docker run -d --name timescaledb-2 -p 5432:5432 -e POSTGRES_PASSWORD=password timescale/timescaledb:2.13.1-pg16
```

## Connection to db

'postgres://user:pass@example.com:5432/dbname'

'postgres://postgres:password@localhost:5432/postgres'


## Info on initializing sequelize
https://github.com/matt-scott/practice-for-week-11-combining-express-sequelize-short-practice
