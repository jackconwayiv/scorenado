import {
  Button,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../Models";
import colorArray from "../colorArray";
import pullScoresIntoArray from "../pullScoresIntoArray";
import ScoreboardTotalCell from "./ScoreboardTotalCell";
import ScoringModal from "./ScoringModal";

const Scoreboard = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [gameState, setGameState] = useState<Game | null>(null);
  const [json, setJson] = useState<boolean>(false);
  let playersArray: Array<string> = [];

  const { gameIdToLoad } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeCategory = (val: number) => {
    setActiveCategoryIndex(activeCategoryIndex + val);
  };

  const determinePosition = (num: number) => {
    let position: string = "";
    if (num === 0) {
      position = "beginning";
    } else if (gameState && num === gameState.template.categories.length - 1) {
      position = "end";
    } else position = "middle";
    return position;
  };

  const position = determinePosition(activeCategoryIndex);

  useEffect(() => {
    const fetchGame = async () => {
      const { data } = await axios.get<Game>(`/api/games/${gameIdToLoad}`);
      setGameState(data);
    };
    fetchGame();
  }, [gameIdToLoad]);

  if (gameState) {
    for (let p = 1; p <= 8; p++) {
      const key = `playerName${p}` as keyof Game;
      const name = gameState[key] as string | null;
      if (name !== null) {
        playersArray.push(name);
      }
    }
  }

  const gameObject = JSON.stringify(gameState, null, 2);

  const toggleJson: () => void = () => {
    setJson(!json);
  };

  if (!gameState) {
    return (
      <div className="App">
        <div>LOADING DATA...</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="App">
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "left",
            }}
            className="pixelated"
          >
            {gameState.template.name} Game #{gameState.id}
          </h1>
          <Table width="920px">
            <Thead>
              <Tr>
                <Th px="1px" mx="0px" width="100px">
                  CATEGORY
                </Th>
                {playersArray &&
                  playersArray.length &&
                  playersArray.map((player, pk) => (
                    <Th
                      key={pk + 1000}
                      width="100px"
                      px="1px"
                      mx="0px"
                      color={"black"}
                      backgroundColor={colorArray[pk]}
                    >
                      <Center key={pk + 9000}>{player}</Center>
                    </Th>
                  ))}
              </Tr>
            </Thead>
            <Tbody>
              {gameState.template &&
                gameState.template.categories.length > 0 &&
                gameState.template.categories.map((category, ck) => (
                  <Tr
                    key={ck}
                    onClick={() => {
                      setActiveCategoryIndex(ck);
                      onOpen();
                    }}
                  >
                    <Th
                      backgroundColor={ck % 2 === 0 ? "gray.100" : "gray.200"}
                    >
                      <Center>{category.name.toUpperCase()}</Center>
                    </Th>
                    {category.scores &&
                      (category.scores.length > 0
                        ? pullScoresIntoArray(
                            category,
                            playersArray.length,
                          ).map((value, vk) => (
                            <Td key={vk} backgroundColor={"white"}>
                              <Center>{value}</Center>
                            </Td>
                          ))
                        : playersArray.map((player, index) => (
                            <Td key={index} backgroundColor={"white"}>
                              <Center> </Center>
                            </Td>
                          )))}
                  </Tr>
                ))}
              <Tr>
                <Th backgroundColor={"gray.50"}>TOTAL</Th>
                {playersArray.map((player: string, index: number) => {
                  return (
                    <ScoreboardTotalCell
                      index={index}
                      key={index}
                      template={gameState.template}
                    />
                  );
                })}
              </Tr>
            </Tbody>
          </Table>
          <ScoringModal
            gameId={gameState.id}
            category={gameState.template.categories[activeCategoryIndex]}
            isOpen={isOpen}
            changeCategory={changeCategory}
            position={position}
            onClose={onClose}
            playersArray={playersArray}
            setGameState={setGameState}
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
};

export default Scoreboard;
