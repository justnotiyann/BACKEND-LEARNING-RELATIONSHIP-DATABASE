const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const movies = db.define("movie", {
  judul_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = movies;
