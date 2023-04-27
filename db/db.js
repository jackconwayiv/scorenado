const Sequelize = require("sequelize");

const config = {
  logging: false,
  force: true,
};

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/scorenado`,
  config,
);
module.exports = db;
