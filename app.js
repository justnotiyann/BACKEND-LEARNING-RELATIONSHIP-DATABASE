const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const cors = require("cors");

// =================================
// session
// =================================
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const koneksi = require("./config/db");
app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: koneksi,
    }),
    resave: false,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 0.1 * 60 * 60 * 1000,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// =================================
// routes
// =================================
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(3000, () => console.log("server up and running"));
module.exports = app;
