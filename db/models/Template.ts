import { DataType } from "sequelize-typescript";
import db from "../db";

const Template = db.define("template", {
  name: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  scoredByRounds: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
  lowScoreWins: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
});

export default Template;
