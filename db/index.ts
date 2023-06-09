
import { sequelize } from "./models";

import Category from "./models/Category";
import Game from "./models/Game";
import Score from "./models/Score";
import Template from "./models/Template";

// Game.belongsTo(User);
// this should be many to many?

Template.hasMany(Game, {
  sourceKey: "id",
  foreignKey: "templateId",
  as: "games",
});
Game.belongsTo(Template, { foreignKey: "templateId", as: "template" });
Template.hasMany(Category, {
  sourceKey: "id",
  foreignKey: "templateId",
  as: "categories",
});
Category.belongsTo(Template, { foreignKey: "templateId", as: "template" });
Game.hasMany(Score, {
  sourceKey: "id",
  foreignKey: "gameId",
  as: "scores",
});
Score.belongsTo(Game, { foreignKey: "gameId", as: "game" });
Category.hasMany(Score, {
  sourceKey: "id",
  foreignKey: "categoryId",
  as: "scores",
});
Score.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

export default sequelize;

export { Game };
export { Template };
export { Category };
export { Score };
