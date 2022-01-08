const { DataTypes } = require("sequelize");

const DB = require("../config/db.config");

module.exports = DB.define(
  "Activity",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "activity" }
);
