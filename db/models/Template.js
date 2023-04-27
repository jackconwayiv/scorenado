const Sequelize = require("sequelize");
const db = require("../db");

const Template = db.define("template", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  scoredByRounds: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  lowScoreWins: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Template;
