const { Sequelize } = require("sequelize");
require("dotenv").config();

// const db = new Sequelize(process.env.DATABASE, process.env.USER, "", {
//   host: process.env.HOST,
//   dialect: process.env.DIALECT,
// });
const db = new Sequelize("BELAJAR-RELASI", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then((e) => console.log("server connected"))
  .catch((e) => console.log("failed to connect"));

module.exports = db;
