const db = require("../../config/db");
const { DataTypes } = require("sequelize");
const { type } = require("express/lib/response");

const sale = db.define(
  "sale",
  {
    sale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: DataTypes.DATE,
    price: DataTypes.STRING,
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = sale;
