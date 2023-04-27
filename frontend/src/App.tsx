import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ScoreRow from "./ScoreRow";

function App() {
  const [game, setGame] = useState({});

  const fetchGame = async () => {
    const { data } = await axios.get(`/api/games/1`);
    setGame(data);
  };

  useEffect(() => {
    fetchGame();
  }, []);
  //className="App-header"
  if (!game) {
    return (
      <div className="App">
        <header className="pixelated">SCORENADO</header>
        <div>LOADING DATA </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="pixelated">SCORENADO</header>
        <div>{JSON.stringify(game)}</div>
        {/* map over categories and render this component: */}
        <ScoreRow
          gameId={game.id}
          categoryId={game.template.categories[0].id}
        />
      </div>
    );
  }
}

export default App;
