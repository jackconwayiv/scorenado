import { Model, Optional } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from ".";
//DataTypes ??

interface GameAttributes {
  id: number;
  playerName1: string;
  playerName2: string;
  playerName3: string;
  playerName4: string;
  playerName5: string;
  playerName6: string;
  playerName7: string;
  playerName8: string;
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
