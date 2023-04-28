import React from "react";

interface ScoreRowColumnProps {
  val: string | null;
  valSetter: React.Dispatch<React.SetStateAction<string | null>>;
}

const ScoreRowColumn = ({ val, valSetter }: ScoreRowColumnProps) => {
  return (
    <td>
      <input
        value={val || ""}
        size={5}
        onChange={(e) => valSetter(e.target.value)}
      ></input>
    </td>
  );
};

export default ScoreRowColumn;
