const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const actors = db.define("actor", {
  actor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_panggung: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama_depan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = actors;
