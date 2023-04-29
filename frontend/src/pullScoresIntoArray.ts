import { Category, Score } from "./Models";

const pullScoresIntoArray = (category: Category, players: number) => {
  let scoresArray = [];
  for (let p = 1; p <= players; p++) {
    const key = `value${p}` as keyof Score;
    const scoreValue = category.scores[0][key] as number | null;
    scoresArray.push(scoreValue);
  }
  return scoresArray;
};

export default pullScoresIntoArray;
