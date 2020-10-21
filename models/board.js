const Sequelize = require("sequelize");
const sequelize = require("./../util/db");

const Board = sequelize.define("boards", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Board;
