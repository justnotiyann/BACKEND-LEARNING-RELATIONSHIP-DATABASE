const db = require("../../config/db");
const members = require("./member");
const products = require("./products");
const suppliers = require("./supplier");
const sale = require("./sale");

members.hasMany(sale, { foreignKey: "member_id" });
sale.belongsTo(members, { foreignKey: "member_id" });

products.hasMany(sale, { foreignKey: "product_id" });
sale.belongsTo(products, { foreignKey: "product_id" });

suppliers.hasMany(products, { foreignKey: "supplier_id" });
products.belongsTo(suppliers, { foreignKey: "supplier_id" });

db.sync({ alter: true })
  .then(() => console.log("all table succefuly created"))
  .catch((e) => console.log("failed create table", e));

module.exports = { members, products, suppliers, sale };
