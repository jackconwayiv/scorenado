import React from "react";
const ScoreRowColumn = ({ val, valSetter }) => {
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
