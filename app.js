const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const ejs = require("ejs");
const flash = require("connect-flash");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const koneksi = require("./config/db");

// =================================
// ejs
// =================================
app.set(ejs);
app.set("view engine", "ejs");

// =================================
// session
// =================================

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
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// =================================
// flash
// =================================
app.use(cookieParser("secretString"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

// =================================
// routes
// =================================
const indexRoutes = require("./routes/index");
const userRouter = require("./routes/users/router");
const jurusanRouter = require("./routes/jurusan/router");
const invoicesRouter = require("./routes/invoices/router");
const employeeRouter = require("./routes/employee/router");
const settingRouter = require("./routes/settings/router");

app.use("/", indexRoutes);
app.use("/users", userRouter);
app.use("/jurusan", jurusanRouter);
app.use("/invoices", invoicesRouter);
app.use("/employee", employeeRouter);
app.use("/settings", settingRouter);

app.listen(3000, () => console.log("server up and running"));
module.exports = app;
