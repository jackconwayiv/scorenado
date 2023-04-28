import axios from "axios";
import { useEffect, useState } from "react";
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

  const gameObject = JSON.stringify(gameState, null, 2);

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
      <>
        <div className="App">
          <header className="pixelated">SCORENADO</header>
          {/* map over categories and render this component: */}
          <table>
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[0]}
            />
            {/* will have to filter for category with correct id, not just position in array*/}
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[1]}
            />
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[2]}
            />
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[3]}
            />
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[4]}
            />
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[5]}
            />
            <ScoreRow
              gameId={gameState.id}
              setGameState={setGameState}
              playersArray={playersArray}
              category={gameState.template.categories[6]}
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
        <pre>{gameObject}</pre>
      </>
    );
  }
}

export default App;
