import { Category } from "./Models";

const pullScoresIntoArray = (category: Category) => {
  return [
    category.scores[0].value1,
    category.scores[0].value2,
    category.scores[0].value3,
    category.scores[0].value4,
    category.scores[0].value5,
    category.scores[0].value6,
    category.scores[0].value7,
    category.scores[0].value8,
  ];
};

export default pullScoresIntoArray;