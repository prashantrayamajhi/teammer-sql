const router = require("express").Router();
const controller = require("./../controllers/auth.controller");

router.get("/login", controller.getLogin);

router.post("/login", controller.postLogin);

router.get("/signup", controller.getSignup);

router.post("/signup", controller.postSignup);

module.exports = router;
