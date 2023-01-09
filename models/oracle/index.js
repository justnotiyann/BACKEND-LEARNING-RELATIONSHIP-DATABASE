const db = require("../../config/db");

const customers = require("./customer");
const actors = require("./actors");
const media = require("./media");
const movies = require("./movies");
const rental_history = require("./rental_history");
const star_billing = require("./star_billing");

customers.hasMany(rental_history, { foreignKey: "customer_id" });
rental_history.belongsTo(customers, { foreignKey: "customer_id" });

rental_history.hasOne(media);
media.belongsTo(rental_history);

media.hasOne(movies, { foreignKey: "media_id" });
movies.belongsTo(media, { foreignKey: "media_id" });

star_billing.hasOne(movies, { foreignKey: "star_billing_id" });
movies.belongsTo(star_billing, { foreignKey: "star_billing_id" });

db.sync()
  .then(() => console.log("all table oracle succefuly created"))
  .catch((e) => console.log("failed create table", e));

module.exports = {
  customers,
  actors,
  movies,
  star_billing,
  rental_history,
  media,
};
