const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    host: 'https://obscure-temple-03891.herokuapp.com',
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;