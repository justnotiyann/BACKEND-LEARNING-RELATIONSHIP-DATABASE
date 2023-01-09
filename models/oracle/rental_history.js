const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const rental_history = db.define(
  "rental_history",
  {
    tanggal_sewa: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tanggal_kembali: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = rental_history;
