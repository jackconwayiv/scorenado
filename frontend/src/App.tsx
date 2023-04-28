import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Game } from "./Models";
import Scoreboard from "./components/Scoreboard";
import ScoringModalBody from "./components/ScoringModalBody";

function App() {
  const [gameState, setGameState] = useState<Game | null>(null);
  const [json, setJson] = useState<boolean>(false);
  let playersArray: Array<string | null> = [];

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

  const toggleJson: () => void = () => {
    setJson(!json);
  };

  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

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
            playersArray={playersArray}
            onOpen={onOpen1}
          />
          <Modal isOpen={isOpen1} size={"full"} onClose={onClose1}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Scores for {gameState.template.categories[0].name.toUpperCase()}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ScoringModalBody
                  gameId={gameState.id}
                  setGameState={setGameState}
                  playersArray={playersArray}
                  category={gameState.template.categories[0]}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose1}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
