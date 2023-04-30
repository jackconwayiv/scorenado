import { Input } from "@chakra-ui/react";

interface ScoringModalRowColumnProps {
  val: number | null;
  initialRef: React.MutableRefObject<null>;
  index: number;
  rewriteScoresArray: (index: number, value: number) => void;
}

const ScoringModalRowColumn = ({
  val,
  index,
  initialRef,
  rewriteScoresArray,
}: ScoringModalRowColumnProps) => {
  return (
    <Input
      value={val || ""}
      ref={index === 0 ? initialRef : null}
      maxW={"35px"}
      p={"5px"}
      onChange={(e) => rewriteScoresArray(index, parseInt(e.target.value))}
    ></Input>
  );
};

export default ScoringModalRowColumn;
