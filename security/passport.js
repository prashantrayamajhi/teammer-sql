const bcrypt = require("bcryptjs");
const User = require("./../models/user");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ where: { username } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(function (user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};
