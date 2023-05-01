import { Model, Optional } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from ".";

interface GameAttributes {
  id: number;
  playerName1: string;
  playerName2: string | null;
  playerName3: string | null;
  playerName4: string | null;
  playerName5: string | null;
  playerName6: string | null;
  playerName7: string | null;
  playerName8: string | null;
  templateId?: number;
}

interface GameCreationAttributes extends Optional<GameAttributes, "id"> {}

interface GameInstance
  extends Model<GameAttributes, GameCreationAttributes>,
    GameAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Game = sequelize.define<GameInstance>("Game", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
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
    allowNull: true,
  },
  playerName3: {
    type: DataType.STRING,
    allowNull: true,
  },
  playerName4: {
    type: DataType.STRING,
    allowNull: true,
  },
  playerName5: {
    type: DataType.STRING,
    allowNull: true,
  },
  playerName6: {
    type: DataType.STRING,
    allowNull: true,
  },
  playerName7: {
    type: DataType.STRING,
    allowNull: true,
  },
  playerName8: {
    type: DataType.STRING,
    allowNull: true,
  },
});

export default Game;
