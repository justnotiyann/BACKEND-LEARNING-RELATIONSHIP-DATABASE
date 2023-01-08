const Users = require("./Users");
const db = require("../config/db");

db.sync({ alter: true })
  .then(() => console.log("all table succefuly created"))
  .catch((e) => console.log("failed create table", e));

module.exports = { Users };
