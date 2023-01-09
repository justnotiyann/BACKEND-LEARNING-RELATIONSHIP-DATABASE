const db = require("../config/db");
const { DataTypes } = require("sequelize");

const Employee = db.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Employee;
