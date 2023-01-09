const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Jurusan = db.define(
  "jurusan",
  {
    jurusan: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = Jurusan;
