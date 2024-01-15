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

let PageLoads = sequelize.define('page_loads', {
    userAgent: {type: Sequelize.STRING, primaryKey: true },
    time: {type: Sequelize.DATE, primaryKey: true }
}, { timestamps: false });

app.use(express.json());
app.get('/', (req,res) => res.send('Go to /test to post and read db data.'))

app.get('/test', async (req, res) => {
    // get the user agent and current time
    const userAgent = req.get('user-agent');
    const time = new Date().getTime();

    try {
        // insert the record
        await PageLoads.create({
            userAgent, time
        });

        // now display everything in the table
        const messages = await PageLoads.findAll();
        res.send(messages);
    } catch (e) {
        console.log('Error inserting data', e)
    }
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

