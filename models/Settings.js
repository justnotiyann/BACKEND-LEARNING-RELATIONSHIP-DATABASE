const db = require("../config/db");
const { DataTypes } = require("sequelize");

const Setting = db.define("Setting", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autoLogin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

const mahasiswa = db.define("mahasiswa", {
  name: DataTypes.STRING,
});

mahasiswa.hasOne(Setting, { foreignKey: "setting_user" });
Setting.belongsTo(mahasiswa, { foreignKey: "setting_user" });

// Setting.hasOne(mahasiswa, { foreignKey: "setting_id" });
// mahasiswa.belongsTo(Setting, { foreignKey: "setting_id" });

db.sync({ force: true })
  .then(() => console.log("all table succefuly created"))
  .catch((e) => console.log("failed create table", e));

module.exports = Setting;
