const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Lonewolf@123',
  database: 'airbnb'
});

module.exports = pool.promise();