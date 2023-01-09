const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const products = db.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    quentity: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = products;
