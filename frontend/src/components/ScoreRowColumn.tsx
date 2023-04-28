import { Input } from "@chakra-ui/react";

interface ScoreRowColumnProps {
  val: number | null;
  index: number;
  rewriteScoresArray: (index: number, value: number) => void;
}

const ScoreRowColumn = ({
  val,
  index,
  rewriteScoresArray,
}: ScoreRowColumnProps) => {
  return (
    <Input
      value={val || 0}
      onChange={(e) => rewriteScoresArray(index, parseInt(e.target.value))}
    ></Input>
  );
};

export default ScoreRowColumn;
