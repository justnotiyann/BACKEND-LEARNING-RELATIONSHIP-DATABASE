const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.index);
router.post("/", controller.create);
router.post("/:id", controller.show);

module.exports = router;
