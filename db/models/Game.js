const Sequelize = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  playerName1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  playerName2: {
    type: Sequelize.STRING,
  },
  playerName3: {
    type: Sequelize.STRING,
  },
  playerName4: {
    type: Sequelize.STRING,
  },
  playerName5: {
    type: Sequelize.STRING,
  },
  playerName6: {
    type: Sequelize.STRING,
  },
  playerName7: {
    type: Sequelize.STRING,
  },
  playerName8: {
    type: Sequelize.STRING,
  },
});

module.exports = Game;
