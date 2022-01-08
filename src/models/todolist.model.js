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
      allowNull: true,
      defaultValue: "very-high",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    activity_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  { tableName: "todolist" }
);
