const Sequelize = require("sequelize");

const sequelize = new Sequelize("teammer", "postgres", "root", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
