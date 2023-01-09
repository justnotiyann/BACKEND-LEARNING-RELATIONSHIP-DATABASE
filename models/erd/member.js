const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const members = db.define(
  "member",
  {
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = members;
