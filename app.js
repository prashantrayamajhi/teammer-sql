const express = require("express");
const app = express();
const db = require("./util/db");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

// models
const Board = require("./models/board");
const Tasks = require("./models/tasks");

// routes
const BoardRoute = require("./routes/board.route");

app.use("/", BoardRoute);

// assoctiations
Board.hasMany(Tasks);

db
  .sync
  // {
  //  force: true
  // }
  ()
  .then(() => {
    app.listen(8000, console.log("Listening on port 8000"));
  })
  .catch((err) => {
    console.log(err);
  });
