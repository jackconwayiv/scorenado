//no users for v0;

// import db from "../db";
import { Category, Game, Score, Template } from "../";
import sequelize from "../index";

const firstGame = {
  playerName1: "Walt",
  playerName2: "Jesse",
  playerName3: "Hank",
  playerName4: "Gomez",
  templateId: 0,
};
const currentGame = {
  playerName1: "Jimmy",
  playerName2: "Kim",
  playerName3: "Mike",
  playerName4: "Gustavo",
  playerName5: "Chuck",
  playerName6: "Nacho",
  playerName7: "Lalo",
  playerName8: "Howard",
  templateId: 0,
};

const wingspanTemplate = {
  name: "Wingspan",
  scoredByRounds: false,
  lowScoreWins: false,
};

const dominionTemplate = {
  name: "Dominion",
  scoredByRounds: false,
  lowScoreWins: false,
};

const cardgameTemplate = {
  name: "Card Game",
  scoredByRounds: true,
  lowScoreWins: false,
};

const wingspanCategories = [
  {
    name: "bird cards",
    description: "points from bird cards in your tableau",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "bonus cards",
    description: "points from completing bonus cards",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "end-of-round goals",
    description: "points from placement in end-of-round goals",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "eggs on cards",
    description: "each egg is worth 1 point",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "food on cards",
    description: "each food on a card is worth 1 point",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "tucked cards",
    description: "each tucked card is worth 1 point",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "nectar rewards",
    description:
      "for each habitat, most nectar is 5 points and second most is 2 points",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
];
const dominionCategories = [
  {
    name: "estates",
    description: "add em up, they're each worth 1 VP",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "duchies",
    description: "each worth 3 VP",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "provinces",
    description: "each worth 6 VP",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "colonies",
    description: "each worth 10 VP",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "VP tokens",
    description: "value in tokens",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
  {
    name: "curses",
    description: "for now, type negative values",
    isScored: true,
    isManualTotal: false,
    templateId: 0,
  },
];
const cardgameCategories = [
  { name: "round 1", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 2", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 3", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 4", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 5", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 6", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 7", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 8", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 9", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 10", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 11", isScored: true, isManualTotal: false, templateId: 0 },
  { name: "round 12", isScored: true, isManualTotal: false, templateId: 0 },
];
const firstScores = [
  {
    value1: 33,
    value2: 50,
    value3: 42,
    value4: 42,
    gameId: 0,
    categoryId: 0,
  },
  {
    value1: 8,
    value2: 12,
    value3: 6,
    value4: 12,
    gameId: 0,
    categoryId: 0,
  },
  {
    value1: 22,
    value2: 10,
    value3: 13,
    value4: 4,
    gameId: 0,
    categoryId: 0,
  },
  {
    value1: 26,
    value2: 12,
    value3: 6,
    value4: 4,
    gameId: 0,
    categoryId: 0,
  },
  {
    value1: 0,
    value2: 0,
    value3: 7,
    value4: 0,
    gameId: 0,
    categoryId: 0,
  },
  {
    value1: 9,
    value2: 2,
    value3: 6,
    value4: 21,
    gameId: 0,
    categoryId: 0,
  },
  {
    value1: 8,
    value2: 4,
    value3: 0,
    value4: 8,
    gameId: 0,
    categoryId: 0,
  },
];
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("database synced! seeding data:");
  const wingspanTemp = await Template.create(wingspanTemplate);
  const dominionTemp = await Template.create(dominionTemplate);
  const cardgameTemp = await Template.create(cardgameTemplate);
  const wingspanCats = wingspanCategories.map(async (category) => {
    category.templateId = wingspanTemp.id;
    return await Category.create(category);
  });
  firstGame.templateId = wingspanTemp.id;
  const firstGameObject = await Game.create(firstGame);
  currentGame.templateId = wingspanTemp.id;
  await Game.create(currentGame);
  dominionCategories.forEach(async (category) => {
    category.templateId = dominionTemp.id;
    await Category.create(category);
  });
  cardgameCategories.forEach(async (category) => {
    category.templateId = cardgameTemp.id;
    await Category.create(category);
  });
  firstScores.forEach(async (score, index) => {
    score.gameId = firstGameObject.id;
    score.categoryId = (await wingspanCats[index]).id;
    await Score.create(score);
  });
  // await Score.sync({ force: true });
  // await Score.create(firstScore);
  console.log("Seeding successful!");
  // await sequelize.close();
};

export default seedDatabase;
