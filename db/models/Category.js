const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
  },
  isScored: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isManualTotal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Category;
