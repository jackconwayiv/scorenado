import { Model, Optional } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from ".";
//DataTypes ??

interface ScoreAttributes {
  id: number;
  value1: number;
  value2: number | null;
  value3: number | null;
  value4: number | null;
  value5: number | null;
  value6: number | null;
  value7: number | null;
  value8: number | null;
  categoryId?: number;
  gameId?: number;
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
    allowNull: true,
  },
  value3: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  value4: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  value5: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  value6: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  value7: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  value8: {
    type: DataType.INTEGER,
    allowNull: true,
  },
});

export default Score;
