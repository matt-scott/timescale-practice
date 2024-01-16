const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const port = 3000;


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
app.get('/', (req, res) => res.send('Hello World!'))

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))