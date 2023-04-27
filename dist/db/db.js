"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config = {
    logging: false,
};
const db = new Sequelize(`postgres://localhost:5432/scorenado`, config);
exports.default = db;
