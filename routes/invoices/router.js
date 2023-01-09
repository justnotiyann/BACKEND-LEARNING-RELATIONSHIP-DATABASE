const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.index);
router.post("/", controller.store);

module.exports = router;
