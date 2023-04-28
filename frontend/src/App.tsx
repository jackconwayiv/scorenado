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
import Scoreboard from "./Scoreboard";
import ScoringModal from "./ScoringModal";

function App() {
  const [gameState, setGameState] = useState<Game | null>(null);
  let playersArray: Array<string | null> = [];

  useEffect(() => {
    const fetchGame = async () => {
      const { data } = await axios.get<Game>(`/api/games/1`);
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
          <Scoreboard gameState={gameState} playersArray={playersArray} onOpen={onOpen1} />
          <Button onClick={onOpen1}>Open Modal</Button>
          <Modal isOpen={isOpen1} onClose={onClose1}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Scores for {gameState.template.categories[0].name.toUpperCase()}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ScoringModal
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
        <pre>{gameObject}</pre>
      </>
    );
  }
}

export default App;
