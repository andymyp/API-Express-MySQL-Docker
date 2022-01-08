const { DataTypes } = require("sequelize");

const DB = require("../config/db.config");

module.exports = DB.define(
  "Todolist",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM("very-low", "low", "medium", "high", "very-high"),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.ENUM("true", "false"),
      allowNull: false,
    },
    activity_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  { tableName: "todolist" }
);
