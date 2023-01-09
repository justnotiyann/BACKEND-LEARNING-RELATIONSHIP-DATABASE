const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const Users = require("../models/Users");

function failFlash(req, res, message) {
  req.flash("fail", message);
  res.locals.fail = req.flash();
}

function successFlash(req, res, message) {
  req.flash("success", message);
  res.locals.success = req.flash();
}

router.get("/", (req, res, next) => {
  res.render("users");
});

router.post("/", async (req, res, next) => {
  try {
    const { email, username, password, address, jurusanId } = req.body;
    if (
      email == "" ||
      username == "" ||
      password == "" ||
      address == "" ||
      jurusanId == ""
    ) {
      failFlash(req, res, "harap isi semua data !");
      res.render("users");
    } else {
      const hashPass = await bcryptjs.hash(password, 12);
      const result = await Users.create({
        email,
        username,
        password: hashPass,
        address,
        jurusanId,
      });
      if (!result) {
        failFlash(req, res, "Internal Server Error");
        res.render("users");
        console.log("terjadi kesalahan");
      }
      successFlash(req, res, "Berhasil Tambah Data");
      res.render("users");
    }
  } catch (error) {
    failFlash(req, res, "Internal Server Error");
    res.render("users");
  }
});

module.exports = router;
