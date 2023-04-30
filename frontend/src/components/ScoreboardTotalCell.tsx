import { Td } from "@chakra-ui/react";
import { Score, Template } from "../Models";

interface ScoreboardTotalCellProps {
  template: Template;
  index: number;
}

const ScoreboardTotalCell = ({ template, index }: ScoreboardTotalCellProps) => {
  const addUpPlayerTotal = (index: number, template: Template) => {
    let total: number = 0;
    const key = `value${index + 1}` as keyof Score;
    template.categories.forEach((category) => {
      const score: number | null =
        category.scores.length > 0
          ? (category.scores[0][key] as number | null)
          : 0;
      total += score || 0;
    });
    return total;
  };
  return <Td>{addUpPlayerTotal(index, template)}</Td>;
};

export default ScoreboardTotalCell;
