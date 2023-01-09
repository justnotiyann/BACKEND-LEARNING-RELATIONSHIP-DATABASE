const router = require("express").Router();
const {
  customers,
  rental_history,
  media,
  movies,
  star_billing,
  actors,
} = require("../../models/oracle/index");

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
    const result = await rental_history.findAll({
      include: [
        {
          model: media,
          attributes: ["media_id", "format"],
        },
      ],
    });

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

// =================================
// media
// =================================
router.get("/media", async (req, res, next) => {
  try {
    const result = await media.findAll();

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});
router.post("/media", async (req, res, next) => {
  try {
    const result = await media.create(req.body);

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});

// =================================
// movies
// =================================
router.get("/movies", async (req, res, next) => {
  try {
    const result = await movies.findAll({
      include: [
        {
          model: media,
          attributes: ["format"],
        },
        {
          model: star_billing,
          attributes: ["komentar"],
        },
        {
          model: actors,
          attributes: ["nama_panggung", "nama_depan"],
        },
      ],
      attributes: ["judul", "deskripsi"],
    });

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});
router.post("/movies", async (req, res, next) => {
  try {
    const result = await movies.create(req.body);

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});

// =================================
// star billing
// =================================

router.get("/star-billing", async (req, res, next) => {
  try {
    const result = await star_billing.findAll();

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});
router.post("/star-billing", async (req, res, next) => {
  try {
    const result = await star_billing.create(req.body);

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});

// =================================
// actors
// =================================
router.get("/actors", async (req, res, next) => {
  try {
    const result = await actors.findAll();

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});
router.post("/actors", async (req, res, next) => {
  try {
    const result = await actors.create(req.body);

    if (!result) {
      res.sendStatus(500);
    }

    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
