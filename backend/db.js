const mysql = require('mysql2/promise');

const config = {
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
};
const connection = mysql.createPool(config);

module.exports = connection;
