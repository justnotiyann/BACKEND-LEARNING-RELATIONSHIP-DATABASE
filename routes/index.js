const router = require("express").Router();
const controller = require("./controller");

router.get("/cms/users", controller.index);
router.post("/cms/users", controller.create);
router.get("/cms/users/:id", controller.show);
router.put("/cms/users/:id", controller.update);
router.delete("/cms/users/:id", controller.destroy);

module.exports = router;
