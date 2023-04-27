"use strict";
//no users for v0;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const Category_1 = __importDefault(require("../db/models/Category"));
const Game_1 = __importDefault(require("../db/models/Game"));
const Template_1 = __importDefault(require("../db/models/Template"));
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
        description: "for each habitat, most nectar is 5 points and second most is 2 points",
        isScored: false,
        isManualTotal: false,
    },
];
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.sync({ force: true });
    console.log("database synced! seeding data:");
    yield Template_1.default.create(wingspanTemplate);
    yield Game_1.default.create(firstGame);
    yield Category_1.default.bulkCreate(wingspanCategories);
    console.log("Seeding successful!");
    yield db_1.default.close();
});
exports.default = seedDatabase;
