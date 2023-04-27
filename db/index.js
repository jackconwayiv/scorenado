const db = require("./db");

const Game = require("./models/Game");
const Template = require("./models/Template");
const Category = require("./models/Category");
const Score = require("./models/Score");

Game.hasOne(Template); //is this right?
//Game.belongsTo(User);
Template.hasMany(Category);
Category.belongsTo(Template);
Category.hasMany(Score);
Game.hasMany(Score);
Score.belongsTo(Category); //is this redundant?

module.exports = {
  db,
  models: {
    Game,
    Template,
    Category,
    Score,
  },
};
