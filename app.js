const express = require("express");
const app = express();
const db = require("./util/db");
const session = require("express-session");
const passport = require("passport");

require("./security/passport")(passport);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "omae wa mou shinderu",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// models
const Board = require("./models/board");
const Tasks = require("./models/tasks");
const User = require("./models/user");

// routes
const BoardRoute = require("./routes/board.route");
const AuthRoute = require("./routes/auth.route");

app.use("/", BoardRoute);
app.use("/auth", AuthRoute);

// assoctiations
Board.hasMany(Tasks, { onDelete: "CASCADE" });
User.hasMany(Board, { onDelete: "CASCADE" });

db.sync({
  // force: true,
})
  .then(() => {
    app.listen(8000, console.log("Listening on port 8000"));
  })
  .catch((err) => {
    console.log(err);
  });
