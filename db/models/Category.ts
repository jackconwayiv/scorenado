import { Model, Optional } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from ".";

interface CategoryAttributes {
  id: number;
  name: string;
  description?: string;
  isScored: boolean;
  isManualTotal: boolean;
  templateId?: number;
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

interface CategoryInstance
  extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Category = sequelize.define<CategoryInstance>("Category", {
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
