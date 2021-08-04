const express = require("express")
const app = express()
const {Pool} = require('pg')
const pool = require('./db/db')
const cors = require("cors")

const PORT = process.env.PORT || 3004

const pr = process.env.NODE_ENV

// Middlewares
app.use(cors())
app.use(express.static('public'))

// const pool = new Pool({
//     host: 'localhost',
//     user: 'garrettross',
//     database: 'test_deploy',
//     port: 5432,
//     password: ''
// })

// routes
app.get('/api/students', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM student')
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/pr', (req, res) => {
    res.json({processIs: pr})
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})  