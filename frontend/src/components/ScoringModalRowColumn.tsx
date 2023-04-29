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
      value={val || ""}
      onChange={(e) => rewriteScoresArray(index, parseInt(e.target.value))}
    ></Input>
  );
};

export default ScoringModalRowColumn;
