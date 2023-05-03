import { Input } from "@chakra-ui/react";

interface ScoringModalRowColumnProps {
  val: number | null;
  index: number;
  rewriteScoresArray: (index: number, value: number) => void;
}

const ScoringModalRowColumn = ({
  val,
  index,
  rewriteScoresArray,
}: ScoringModalRowColumnProps) => {
  return (
    <Input
      value={val || 0}
      maxW={"35px"}
      tabIndex={index + 1}
      p={"5px"}
      onChange={(e) => rewriteScoresArray(index, parseInt(e.target.value))}
    ></Input>
  );
};

export default ScoringModalRowColumn;
