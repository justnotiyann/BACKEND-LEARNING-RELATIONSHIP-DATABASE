const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const media = db.define("media", {
  media_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  format: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = media;
