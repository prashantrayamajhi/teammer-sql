const User = require("./../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", { title: "Login" });
};

exports.postLogin = (req, res, next) => {};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", { title: "Signup" });
};

exports.postSignup = (req, res, next) => {
  const { name, username, password } = req.body;
  User.findOne({
    where: {
      username,
    },
  })
    .then((user) => {
      if (user) {
        return res.redirect("/auth/signup");
      }
      bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          return User.create({
            name,
            username,
            password: hashedPassword,
          });
        })
        .then((user) => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
    })

    .catch((err) => {
      console.log(err);
    });
};
