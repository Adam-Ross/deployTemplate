const {Pool} = require('pg')

let pool
if(!process.env.NODE_ENV) {
    pool = new Pool({
        user: 'garrettross', 
        host: 'localhost',
        port: 5432,
        password: '',
        database: 'test_deploy'
    })
} else {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        host: 'https://obscure-temple-03891.herokuapp.com',
        ssl: {
            rejectUnauthorized: false
        }
    })
}


module.exports = pool;