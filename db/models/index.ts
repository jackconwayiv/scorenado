import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(`postgres://localhost:5432/scorenado`, {
  logging: false,
});

export { Sequelize, sequelize };
