import React, { useState } from "react";

const ScoreRow = ({ gameId, categoryId, numberOfPlayers }) => {
  const [val1, setVal1] = useState<string | null>(null);

  //loops numberOfPlayers times and makes a score column for each player

  return (
    <form>
      <input
        value={val1 || ""}
        onChange={(e) => setVal1(e.target.value)}
      ></input>
      Game {gameId} / Category {categoryId}
    </form>
  );
};

export default ScoreRow;
