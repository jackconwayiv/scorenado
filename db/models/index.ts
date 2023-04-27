import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../../../config.json")[env];

// const sequelize = config.url
//   ? new Sequelize(config.url, config)
//   : new Sequelize(config.database, config.username, config.password, config);

const sequelize = new Sequelize(`postgres://localhost:5432/scorenado`, {
  logging: false,
});

export { Sequelize, sequelize };
