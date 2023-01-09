const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.index);
router.post("/", controller.create);

module.exports = router;
