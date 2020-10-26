const router = require("express").Router();
const controller = require("./../controllers/auth.controller");
const passport = require("passport");
const isNotAuthenticated = require("../middleware/isNotAuthenticated");

router.get("/login", isNotAuthenticated, controller.getLogin);

router.post("/login", isNotAuthenticated, controller.postLogin);

router.get("/signup", isNotAuthenticated, controller.getSignup);

router.post("/signup", isNotAuthenticated, controller.postSignup);

module.exports = router;
