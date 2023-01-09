const db = require("../../config/db");

const customers = require("./customer");
const actors = require("./actors");
const media = require("./media");
const movies = require("./movies");
const rental_history = require("./rental_history");
const star_billing = require("./star_billing");

customers.hasMany(rental_history, { foreignKey: "customer_id" });
rental_history.belongsTo(customers, { foreignKey: "customer_id" });

// movies.hasMany(media, { foreignKey: "movie_id" });
// movies.hasMany(star_billing, { foreignKey: "movie_id" });

// star_billing.belongsTo(movies, { foreignKey: "star_billing_id" });
// media.belongsTo(movies, { foreignKey: "star_billing_id" });

// actors.hasMany(star_billing, { foreignKey: "actors_id" });
// star_billing.belongsTo(actors, { foreignKey: "actors_id" });

// media.hasMany(rental_history, { foreignKey: "media_id" });
// rental_history.belongsTo(media, { foreignKey: "media_id" });

db.sync({ alter: true })
  .then(() => console.log("all table oracle succefuly created"))
  .catch((e) => console.log("failed create table", e));

module.exports = { customers, rental_history };
