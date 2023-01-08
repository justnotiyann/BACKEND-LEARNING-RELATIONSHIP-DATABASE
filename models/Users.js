const { DataTypes, Deferrable } = require("sequelize");
const db = require("../config/db");

const Users = db.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    jurusan: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Users;
