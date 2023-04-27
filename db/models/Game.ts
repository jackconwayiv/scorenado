import { DataType } from "sequelize-typescript";
import db from "../db";

const Game = db.define("game", {
  playerName1: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  playerName2: {
    type: DataType.STRING,
  },
  playerName3: {
    type: DataType.STRING,
  },
  playerName4: {
    type: DataType.STRING,
  },
  playerName5: {
    type: DataType.STRING,
  },
  playerName6: {
    type: DataType.STRING,
  },
  playerName7: {
    type: DataType.STRING,
  },
  playerName8: {
    type: DataType.STRING,
  },
});

export default Game;
