"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const db_1 = __importDefault(require("../db"));
const Category = db_1.default.define("category", {
    name: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
    },
    description: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    isScored: {
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: true,
    },
    isManualTotal: {
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    },
});
exports.default = Category;
