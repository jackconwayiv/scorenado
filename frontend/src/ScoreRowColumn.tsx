import React from "react";

interface ScoreRowColumnProps {
  val: number | null;
  valSetter: React.Dispatch<React.SetStateAction<number | null>>;
}

const ScoreRowColumn = ({ val, valSetter }: ScoreRowColumnProps) => {
  return (
    <td>
      <input
        value={val || ""}
        size={5}
        onChange={(e) => valSetter(parseInt(e.target.value))}
      ></input>
    </td>
  );
};

export default ScoreRowColumn;
