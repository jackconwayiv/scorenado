import { DataType } from "sequelize-typescript";
import db from "../db";

const Score = db.define("score", {
  value1: {
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  value2: {
    type: DataType.INTEGER,
  },
  value3: {
    type: DataType.INTEGER,
  },
  value4: {
    type: DataType.INTEGER,
  },
  value5: {
    type: DataType.INTEGER,
  },
  value6: {
    type: DataType.INTEGER,
  },
  value7: {
    type: DataType.INTEGER,
  },
  value8: {
    type: DataType.INTEGER,
  },
});

export default Score;
