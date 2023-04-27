import { Model, Optional } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from ".";
//DataTypes ??

interface TemplateAttributes {
  id: number;
  name: string;
  scoredByRounds: boolean;
  lowScoreWins: boolean;
}

interface TemplateCreationAttributes
  extends Optional<TemplateAttributes, "id"> {}

interface TemplateInstance
  extends Model<TemplateAttributes, TemplateCreationAttributes>,
    TemplateAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Template = sequelize.define<TemplateInstance>("Template", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
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
