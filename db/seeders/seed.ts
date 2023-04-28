//no users for v0;

// import db from "../db";
import { Category, Game, Score, Template } from "../";
import sequelize from "../index";

const firstGame = {
  id: 1,
  templateId: 1,
  playerName1: "Walt",
  playerName2: "Jesse",
  playerName3: "Hank",
  playerName4: "Gomez",
  // playerName5: null,
  // playerName6: null,
  // playerName7: null,
  // playerName8: null,
};
const currentGame = {
  id: 2,
  templateId: 1,
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
  id: 1,
  name: "Wingspan",
  scoredByRounds: false,
  lowScoreWins: false,
};
const wingspanCategories = [
  {
    id: 1,
    name: "bird cards",
    description: "points from bird cards in your tableau",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
  {
    id: 2,
    name: "bonus cards",
    description: "points from completing bonus cards",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
  {
    id: 3,
    name: "end-of-round goals",
    description: "points from placement in end-of-round goals",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
  {
    id: 4,
    name: "eggs on cards",
    description: "each egg is worth 1 point",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
  {
    id: 5,
    name: "food on cards",
    description: "each food on a card is worth 1 point",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
  {
    id: 6,
    name: "tucked cards",
    description: "each tucked card is worth 1 point",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
  {
    id: 7,
    name: "nectar rewards",
    description:
      "for each habitat, most nectar is 5 points and second most is 2 points",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
];
const firstScores = [
  {
    id: 111,
    categoryId: 1,
    gameId: 1,
    value1: 33,
    value2: 50,
    value3: 42,
    value4: 42,
  },
  {
    id: 112,
    categoryId: 2,
    gameId: 1,
    value1: 8,
    value2: 12,
    value3: 6,
    value4: 12,
  },
  {
    id: 113,
    categoryId: 3,
    gameId: 1,
    value1: 22,
    value2: 10,
    value3: 13,
    value4: 4,
  },
  {
    id: 114,
    categoryId: 4,
    gameId: 1,
    value1: 26,
    value2: 12,
    value3: 6,
    value4: 4,
  },
  {
    id: 115,
    categoryId: 5,
    gameId: 1,
    value1: 0,
    value2: 0,
    value3: 7,
    value4: 0,
  },
  {
    id: 116,
    categoryId: 6,
    gameId: 1,
    value1: 9,
    value2: 2,
    value3: 6,
    value4: 21,
  },
  {
    id: 117,
    categoryId: 7,
    gameId: 1,
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
