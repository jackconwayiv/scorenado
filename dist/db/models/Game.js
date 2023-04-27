"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const db_1 = __importDefault(require("../db"));
const Game = db_1.default.define("game", {
    playerName1: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
    },
    playerName2: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    playerName3: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    playerName4: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    playerName5: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    playerName6: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    playerName7: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    playerName8: {
        type: sequelize_typescript_1.DataType.STRING,
    },
});
exports.default = Game;
