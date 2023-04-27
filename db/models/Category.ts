import { DataType } from "sequelize-typescript";
import db from "../db";

const Category = db.define("category", {
  name: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  description: {
    type: DataType.STRING,
  },
  isScored: {
    type: DataType.BOOLEAN,
    defaultValue: true,
  },
  isManualTotal: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
});

export default Category;
