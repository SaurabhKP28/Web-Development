const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'product',
    password: 'Lonewolf@123'
});

module.exports = pool.promise();