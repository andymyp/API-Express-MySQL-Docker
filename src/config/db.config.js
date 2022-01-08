const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const HOST = process.env.MYSQL_HOST || "localhost";
const PORT = process.env.MYSQL_PORT || 3306;
const USER = process.env.MYSQL_USER || "root";
const PASSWORD = process.env.MYSQL_PASSWORD || "";
const DATABASE = process.env.MYSQL_DBNAME || "todo4";

module.exports = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 6,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
