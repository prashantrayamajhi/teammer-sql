const router = require("express").Router();
const controller = require("./../controllers/auth.controller");
const { forwardAuthenticated } = require("../middleware/auth");

router.get("/login", forwardAuthenticated, controller.getLogin);

router.post("/login", forwardAuthenticated, controller.postLogin);

router.get("/signup", forwardAuthenticated, controller.getSignup);

router.post("/signup", forwardAuthenticated, controller.postSignup);

module.exports = router;
