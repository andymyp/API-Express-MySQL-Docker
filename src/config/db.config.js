const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

module.exports = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DBNAME || "todo4",
});
