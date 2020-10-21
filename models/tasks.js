const Sequelize = require("sequelize");
const sequelize = require("./../util/db");

const Tasks = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  task: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Tasks;
