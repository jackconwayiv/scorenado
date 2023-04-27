import { Model, Optional } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from ".";
//DataTypes ??

interface ScoreAttributes {
  id: number;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  value6: number;
  value7: number;
  value8: number;
}

interface ScoreCreationAttributes extends Optional<ScoreAttributes, "id"> {}

interface ScoreInstance
  extends Model<ScoreAttributes, ScoreCreationAttributes>,
    ScoreAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Score = sequelize.define<ScoreInstance>("Score", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
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
