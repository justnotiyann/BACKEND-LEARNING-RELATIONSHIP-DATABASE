const router = require("express").Router();
const { customers, rental_history } = require("../../models/oracle/index");

router.get("/", (req, res, next) => {
  res.send("oke");
});

router.get("/customers", async (req, res, next) => {
  try {
    const result = await customers.findAll({
      include: [
        {
          model: rental_history,
          attributes: ["tanggal_sewa", "tanggal_kembali"],
        },
      ],
    });

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
});

router.post("/customers", async (req, res, next) => {
  try {
    const result = await customers.create(req.body);

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
});

router.get("/rentals", async (req, res, next) => {
  try {
    const result = await rental_history.findAll();

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});

router.post("/rentals", async (req, res, next) => {
  try {
    const result = await rental_history.create(req.body);

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
