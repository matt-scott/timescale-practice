const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const port = 3000;
const { temperature_sensor_data } = require('./models');


const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            // ssl: {
            //     require: true,
            //     rejectUnauthorized: false
            // }
        }
    })

app.use(express.json());
app.get('/', async(req, res) => {
    // const messages = await temperature_sensor_data.findAll();
    let data = [];

    data = await temperature_sensor_data.findAll({
        attributes: ['timestamp', 'sensor_location','measurement_type','battery','humidity','linkquality','power_outage_count','temperature','pressure','voltage'],
    });

    res.json(data);
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))