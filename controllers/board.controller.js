const Board = require("./../models/board");
const Task = require("./../models/tasks");

exports.findAll = (req, res, next) => {
  Board.findAll()
    .then((boards) => {
      res.render("board/index.ejs", {
        title: "Boards",
        boards,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addBoard = (req, res, next) => {
  res.render("board/add-board", {
    title: "Add Board",
  });
};

exports.findById = (req, res, next) => {
  const id = req.params.id;
  Board.findByPk(id, {
    include: {
      model: Task,
    },
  })
    .then((board) => {
      console.log(board);
      res.render("board/single-board", {
        title: board.name,
        board,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.save = (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  Board.create({
    name,
  })
    .then(() => {
      console.log("Board created successfully");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.saveTask = (req, res, next) => {
  const { task, boardId } = req.body;
  Task.create({
    task,
    boardId,
  })
    .then(() => {
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
  const id = req.params;
  Task.destroy({ where: { id: id.id } })
    .then(() => {
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateById = (req, res, next) => {};

exports.deleteById = (req, res, next) => {};
