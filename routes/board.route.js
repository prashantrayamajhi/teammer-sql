const router = require("express").Router();
const controller = require("./../controllers/board.controller");

router.get("/", controller.findAll);

router.get("/add-board", controller.addBoard);

router.get("/:id", controller.findById);

router.post("/", controller.save);

router.post("/update/:id", controller.updateById);

router.post("/delete/:id", controller.deleteById);

router.post("/task", controller.saveTask);

module.exports = router;