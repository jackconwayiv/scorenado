//no users for v0;

// import db from "../db";
import { sequelize } from "../models";
import Game from "../models/Game";
import Template from "../models/Template";

const firstGame = {
  id: 1,
  templateId: 1,
  playerName1: "Alphonso",
  playerName2: "Cecilia",
  playerName3: "Edmure",
  playerName4: "Gretchen",
  playerName5: "Izzy",
  playerName6: "Katie",
  playerName7: "Michael",
  playerName8: "Oswald",
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
    name: "birds",
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
    name: "eggs",
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
    name: "nectar",
    description:
      "for each habitat, most nectar is 5 points and second most is 2 points",
    isScored: false,
    isManualTotal: false,
    templateId: 1,
  },
];
const firstScore = {
  id: 1,
  templateId: 1,
  value1: 1,
  value2: 1,
  value3: 1,
  value4: 1,
  value5: 1,
  value6: 1,
  value7: 1,
  value8: 1,
};
const seedDatabase = async () => {
  // await db.sync({ force: true });
  await sequelize.sync({ force: true });
  console.log("database synced! seeding data:");
  await Template.create(wingspanTemplate);
  await Game.create(firstGame);
  // await Category.bulkCreate(wingspanCategories);
  // await Score.sync({ force: true });
  // await Score.create(firstScore);
  console.log("Seeding successful!");
  // await db.close();
  await sequelize.close();
};

export default seedDatabase;
