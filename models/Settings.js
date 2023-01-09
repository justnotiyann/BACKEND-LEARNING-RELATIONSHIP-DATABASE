const db = require("../config/db");
const { DataTypes } = require("sequelize");

const Setting = db.define("Setting", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autoLogin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Setting;
