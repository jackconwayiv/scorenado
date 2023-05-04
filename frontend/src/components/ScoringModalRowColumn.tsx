import { Button, Center, Input } from "@chakra-ui/react";

interface ScoringModalRowColumnProps {
  val: number | null;
  index: number;
  rewriteScoresArray: (index: number, value: string) => void;
}

const ScoringModalRowColumn = ({
  val,
  index,
  rewriteScoresArray,
}: ScoringModalRowColumnProps) => {
  return (
    <Center>
      <Button
        minH="20px"
        maxH="30px"
        minW="20px"
        maxW="30px"
        onClick={() =>
          rewriteScoresArray(index, val !== null ? (val - 1).toString() : "0")
        }
      >
        -
      </Button>
      <Input
        value={val !== null ? val : ""}
        minW="40px"
        maxW="50px"
        textAlign="center"
        tabIndex={index + 1}
        p={"5px"}
        onChange={(e) => rewriteScoresArray(index, e.target.value)}
      ></Input>
      <Button
        minH="20px"
        maxH="30px"
        minW="20px"
        maxW="30px"
        onClick={() =>
          rewriteScoresArray(index, val !== null ? (val + 1).toString() : "1")
        }
      >
        +
      </Button>
    </Center>
  );
};

export default ScoringModalRowColumn;
