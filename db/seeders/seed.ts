//no users for v0;

// import db from "../db";
import { Category, Game, Score, Template } from "../";
import sequelize from "../index";

const firstGame = {
  id: 111,
  templateId: 111,
  playerName1: "Walt",
  playerName2: "Jesse",
  playerName3: "Hank",
  playerName4: "Gomez",
};
const currentGame = {
  id: 112,
  templateId: 111,
  playerName1: "Jimmy",
  playerName2: "Kim",
  playerName3: "Mike",
  playerName4: "Gustavo",
  playerName5: "Chuck",
  playerName6: "Nacho",
  playerName7: "Lalo",
  playerName8: "Howard",
};

const wingspanTemplate = {
  id: 111,
  name: "Wingspan",
  scoredByRounds: false,
  lowScoreWins: false,
};

const dominionTemplate = {
  id: 112,
  name: "Dominion",
  scoredByRounds: false,
  lowScoreWins: false,
};

const cardgameTemplate = {
  id: 113,
  name: "Card Game",
  scoredByRounds: true,
  lowScoreWins: false,
};

const wingspanCategories = [
  {
    id: 111,
    name: "bird cards",
    description: "points from bird cards in your tableau",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
  {
    id: 112,
    name: "bonus cards",
    description: "points from completing bonus cards",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
  {
    id: 113,
    name: "end-of-round goals",
    description: "points from placement in end-of-round goals",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
  {
    id: 114,
    name: "eggs on cards",
    description: "each egg is worth 1 point",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
  {
    id: 115,
    name: "food on cards",
    description: "each food on a card is worth 1 point",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
  {
    id: 116,
    name: "tucked cards",
    description: "each tucked card is worth 1 point",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
  {
    id: 117,
    name: "nectar rewards",
    description:
      "for each habitat, most nectar is 5 points and second most is 2 points",
    isScored: false,
    isManualTotal: false,
    templateId: 111,
  },
];
const firstScores = [
  {
    id: 111,
    categoryId: 111,
    gameId: 111,
    value1: 33,
    value2: 50,
    value3: 42,
    value4: 42,
  },
  {
    id: 112,
    categoryId: 112,
    gameId: 111,
    value1: 8,
    value2: 12,
    value3: 6,
    value4: 12,
  },
  {
    id: 113,
    categoryId: 113,
    gameId: 111,
    value1: 22,
    value2: 10,
    value3: 13,
    value4: 4,
  },
  {
    id: 114,
    categoryId: 114,
    gameId: 111,
    value1: 26,
    value2: 12,
    value3: 6,
    value4: 4,
  },
  {
    id: 115,
    categoryId: 115,
    gameId: 111,
    value1: 0,
    value2: 0,
    value3: 7,
    value4: 0,
  },
  {
    id: 116,
    categoryId: 116,
    gameId: 111,
    value1: 9,
    value2: 2,
    value3: 6,
    value4: 21,
  },
  {
    id: 117,
    categoryId: 117,
    gameId: 111,
    value1: 8,
    value2: 4,
    value3: 0,
    value4: 8,
  },
];
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("database synced! seeding data:");
  await Template.create(wingspanTemplate);
  await Template.create(dominionTemplate);
  await Template.create(cardgameTemplate);
  await Game.create(firstGame);
  await Game.create(currentGame);
  await Category.bulkCreate(wingspanCategories);
  // await sequelize.query("ALTER SEQUENCE Categories_id_seq RESTART WITH 8;");
  await Score.bulkCreate(firstScores);
  // await Score.sync({ force: true });
  // await Score.create(firstScore);
  console.log("Seeding successful!");
  // await sequelize.close();
};

export default seedDatabase;
