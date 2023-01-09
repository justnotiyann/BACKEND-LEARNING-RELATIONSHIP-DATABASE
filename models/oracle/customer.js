const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const customers = db.define("customer", {
  id_pelanggan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_depan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama_belakang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = customers;
