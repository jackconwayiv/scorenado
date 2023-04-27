import db from "./db";

import Category from "./models/Category";
import Game from "./models/Game";
import Score from "./models/Score";
import Template from "./models/Template";

// Game.belongsTo(User);
Game.belongsTo(Template);
Template.hasMany(Game);
Template.hasMany(Category);
Category.belongsTo(Template);
Category.hasMany(Score);
Score.belongsTo(Category);
Score.belongsTo(Game);
Game.hasMany(Score);

export default db;

export { Game };
export { Template };
export { Category };
export { Score };
