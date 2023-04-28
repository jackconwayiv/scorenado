import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ScoreRow from "./ScoreRow";

function App() {
  const [gameState, setGameState] = useState<Game | null>(null);
  let playersArray: Array<string | null> = [];

  interface Game {
    id: number;
    playerName1: string;
    playerName2: string | null;
    playerName3: string | null;
    playerName4: string | null;
    playerName5: string | null;
    playerName6: string | null;
    playerName7: string | null;
    playerName8: string | null;
    createdAt: Date;
    updatedAt: Date;
    templateId: number;
    template: Template;
  }
  interface Score {
    id: number;
    value1: number;
    value2: number | null;
    value3: number | null;
    value4: number | null;
    value5: number | null;
    value6: number | null;
    value7: number | null;
    value8: number | null;
    createdAt: Date;
    updatedAt: Date;
    gameId: number;
    categoryId: number;
    game: Game;
  }
  interface Category {
    id: number;
    name: string;
    description: string | null;
    isScored: boolean;
    isManualTotal: boolean;
    createdAt: Date;
    updatedAt: Date;
    templateId: number;
    scores: Array<Score>;
  }
  interface Template {
    id: number;
    name: string;
    scoredByRounds: boolean;
    lowScoreWins: boolean;
    createdAt: Date;
    updatedAt: Date;
    categories: Array<Category>;
  }

  useEffect(() => {
    const fetchGame = async () => {
      const { data } = await axios.get(`/api/games/1`);
      const fetchedGameState: Game = data;
      setGameState(fetchedGameState);
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
        <div>{JSON.stringify(gameState)}</div>
        {/* map over categories and render this component: */}
        <ScoreRow
          gameId={gameState.id}
          categoryId={gameState.template.categories[0].id}
          numberOfPlayers={playersArray.length || 8}
        />
      </div>
    );
  }
}

export default App;
