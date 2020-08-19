const Pool = require('pg').Pool
const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    database : 'myshopdb',
    password : 'postgres',
    port : 5432,
});
