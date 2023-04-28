import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Game } from "./Models";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [gameState, setGameState] = useState<Game | null>(null);
  const [json, setJson] = useState<boolean>(false);
  let playersArray: Array<string> = [];

  useEffect(() => {
    const fetchGame = async () => {
      const { data } = await axios.get<Game>(`/api/games/2`);
      setGameState(data);
    };
    fetchGame();
  }, []);

  const swapGame = async (id: number) => {
    const { data } = await axios.get<Game>(`/api/games/${id}`);
    setGameState(data);
  };

  const gameObject = JSON.stringify(gameState, null, 2);

  if (gameState) {
    for (let p = 1; p <= 8; p++) {
      const key = `playerName${p}` as keyof Game;
      const name = gameState[key] as string | null;
      if (name !== null) {
        playersArray.push(name);
      }
    }
  }

  const toggleJson: () => void = () => {
    setJson(!json);
  };

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
          {gameState.id === 2 && (
            <Button
              backgroundColor={"blue.200"}
              onClick={() => swapGame(1)}
            >{`Swap`}</Button>
          )}
          {gameState.id === 1 && (
            <Button
              backgroundColor={"yellow.200"}
              onClick={() => swapGame(2)}
            >{`Swap`}</Button>
          )}
          <Scoreboard
            gameState={gameState}
            setGameState={setGameState}
            playersArray={playersArray}
          />
        </div>
        <Button
          my={"30px"}
          backgroundColor={"green.200"}
          onClick={() => toggleJson()}
        >
          JSON
        </Button>
        {json && <pre>{gameObject}</pre>}
      </>
    );
  }
}

export default App;
