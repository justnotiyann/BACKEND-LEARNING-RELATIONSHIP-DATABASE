const Users = require("./Users");
const Jurusan = require("./Jurusan");
const db = require("../config/db");

const Employee = require("./Employee");
const Settings = require("./Settings");

Employee.hasOne(Settings);
Settings.belongsTo(Employee);

Jurusan.hasOne(Users);
Users.belongsTo(Jurusan);

db.sync()
  .then(() => console.log("all table succefuly created"))
  .catch((e) => console.log("failed create table", e));

module.exports = { Users, Jurusan, Employee, Settings };
