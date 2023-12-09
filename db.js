const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: process.env.DBConnectionString,
    ssl:{
        rejectUnauthorized: false
    }
});


// const itemsPool = new Pool({
//     user: 'postgres', 
//     host: 'localhost',
//     post: 5432,
//     database: 'postgres'
// });

module.exports = itemsPool;