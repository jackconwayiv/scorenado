import { Input } from "@chakra-ui/react";
import React from "react";

interface ScoreRowColumnProps {
  val: number | null;
  valSetter: React.Dispatch<React.SetStateAction<number | null>>;
}

const ScoreRowColumn = ({ val, valSetter }: ScoreRowColumnProps) => {
  return (
    <Input
      value={val || ""}
      onChange={(e) => valSetter(parseInt(e.target.value))}
    ></Input>
  );
};

export default ScoreRowColumn;
