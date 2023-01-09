const db = require("../../config/db");
const { DataTypes } = require("sequelize");

const star_billing = db.define(
  "star_billing",
  {
    komentar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = star_billing;
