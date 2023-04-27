"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const db_1 = __importDefault(require("../db"));
const Score = db_1.default.define("score", {
    value1: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
    },
    value2: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    value3: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    value4: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    value5: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    value6: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    value7: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    value8: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
});
exports.default = Score;
