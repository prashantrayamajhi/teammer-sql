const router = require("express").Router();
const controller = require("./../controllers/board.controller");
const { isAuthenticated } = require("./../middleware/auth");

router.get("/", isAuthenticated, controller.findAll);

router.get("/add-board", controller.addBoard);

router.get("/:id", controller.findById);

router.post("/", controller.save);

router.post("/update/:id", controller.updateById);

router.post("/delete/:id", controller.deleteById);

router.post("/task", controller.saveTask);

router.get("/task/delete/:id", controller.deleteTask);

router.post("/delete", controller.deleteBoard);

router.post("/logout", controller.logOut);
module.exports = router;
