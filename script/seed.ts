//no users for v0;

import db from "../db";
import Category from "../db/models/Category";
import Game from "../db/models/Game";
import Template from "../db/models/Template";

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
  },
  {
    id: 2,
    name: "bonus cards",
    description: "points from completing bonus cards",
    isScored: false,
    isManualTotal: false,
  },
  {
    id: 3,
    name: "end-of-round goals",
    description: "points from placement in end-of-round goals",
    isScored: false,
    isManualTotal: false,
  },
  {
    id: 4,
    name: "eggs",
    description: "each egg is worth 1 point",
    isScored: false,
    isManualTotal: false,
  },
  {
    id: 5,
    name: "food on cards",
    description: "each food on a card is worth 1 point",
    isScored: false,
    isManualTotal: false,
  },
  {
    id: 6,
    name: "tucked cards",
    description: "each tucked card is worth 1 point",
    isScored: false,
    isManualTotal: false,
  },
  {
    id: 7,
    name: "nectar",
    description:
      "for each habitat, most nectar is 5 points and second most is 2 points",
    isScored: false,
    isManualTotal: false,
  },
];

const seedDatabase = async () => {
  await db.sync({ force: true });
  console.log("database synced! seeding data:");
  await Template.create(wingspanTemplate);
  await Game.create(firstGame);
  await Category.bulkCreate(wingspanCategories);
  console.log("Seeding successful!");
  await db.close();
};

export default seedDatabase;
