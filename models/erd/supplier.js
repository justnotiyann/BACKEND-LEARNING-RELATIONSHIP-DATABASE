const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const suppliers = db.define(
  "supplier",
  {
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = suppliers;
