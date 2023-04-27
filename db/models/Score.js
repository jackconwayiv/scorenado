const Sequelize = require("sequelize");
const db = require("../db");

const Score = db.define("score", {
  value1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  value2: {
    type: Sequelize.INTEGER,
  },
  value3: {
    type: Sequelize.INTEGER,
  },
  value4: {
    type: Sequelize.INTEGER,
  },
  value5: {
    type: Sequelize.INTEGER,
  },
  value6: {
    type: Sequelize.INTEGER,
  },
  value7: {
    type: Sequelize.INTEGER,
  },
  value8: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Score;
