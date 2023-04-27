const Sequelize = require("sequelize");

const config = {
  logging: false,
};

const db = new Sequelize(`postgres://localhost:5432/scorenado`, config);

export default db;
