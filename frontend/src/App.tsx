import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Game } from "./Models";
import ScoreRow from "./ScoreRow";

function App() {
  const [gameState, setGameState] = useState<Game | null>(null);
  let playersArray: Array<string | null> = [];

  useEffect(() => {
    const fetchGame = async () => {
      const { data } = await axios.get<Game>(`/api/games/2`);
      setGameState(data);
    };
    fetchGame();
  }, []);

  if (gameState) {
    playersArray = [
      gameState.playerName1,
      gameState.playerName2,
      gameState.playerName3,
      gameState.playerName4,
      gameState.playerName5,
      gameState.playerName6,
      gameState.playerName7,
      gameState.playerName8,
    ]
      .map((name) => (typeof name === "string" ? name : null))
      .filter((name) => name !== null);
  }

  //className="App-header"
  if (!gameState) {
    return (
      <div className="App">
        <header className="pixelated">SCORENADO</header>
        <div>LOADING DATA...</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="pixelated">SCORENADO</header>
        {/* map over categories and render this component: */}
        <table>
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[0].name}
            categoryId={gameState.template.categories[0].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[1].name}
            categoryId={gameState.template.categories[1].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[2].name}
            categoryId={gameState.template.categories[2].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[3].name}
            categoryId={gameState.template.categories[3].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[4].name}
            categoryId={gameState.template.categories[4].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[5].name}
            categoryId={gameState.template.categories[5].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[6].name}
            categoryId={gameState.template.categories[6].id}
            playersArray={playersArray}
          />
          <ScoreRow
            gameId={gameState.id}
            setGameState={setGameState}
            categoryName={gameState.template.categories[7].name}
            categoryId={gameState.template.categories[7].id}
            playersArray={playersArray}
          />
          <tr>
            <td>TOTAL:</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Confirm</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
