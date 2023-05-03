import { InfoOutlineIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Game, GamePlayerUpdate } from "../Models";
import colorArray from "../colorArray";
import pullScoresIntoArray from "../pullScoresIntoArray";
import randomizeAdjective from "../randomizeAdjective";
import RenameModal from "./RenameModal";
import ScoreboardTotalCell from "./ScoreboardTotalCell";
import ScoringModal from "./ScoringModal";

const Scoreboard = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [gameState, setGameState] = useState<Game | null>(null);
  const [activePlayerIndex, setActivePlayerIndex] = useState<number>(0);
  const [json, setJson] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("playing");
  const [adjective, setAdjective] = useState<string>("a friendly");
  const [colorIndex, setColorIndex] = useState<Array<number>>([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);
  let playersArray: Array<string> = [];

  const { gameIdToLoad } = useParams();

  const {
    isOpen: isScoreOpen,
    onOpen: onScoreOpen,
    onClose: onScoreClose,
  } = useDisclosure();
  const {
    isOpen: isRenameOpen,
    onOpen: onRenameOpen,
    onClose: onRenameClose,
  } = useDisclosure();
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

  const editPlayers = async (action: string, val: number) => {
    if (gameState?.id) {
      const newPlayerNumber = val;
      const newPlayerKey = `playerName${newPlayerNumber}`;
      let value: string | null = null;
      if (action === "add") {
        value = `Player ${newPlayerNumber}`;
      } else if (action === "delete") {
        value = null;
      } else {
        value = action;
      }
      const playerUpdate: GamePlayerUpdate = {
        [newPlayerKey]: value,
      };
      await axios.put(`/api/games/${gameState.id}`, playerUpdate);
      const { data } = await axios.get<Game>(`/api/games/${gameIdToLoad}`);
      setGameState(data);
    }
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
            {
              <Text onClick={() => setAdjective(randomizeAdjective())}>
                [ {adjective} game of {gameState.template.name.toUpperCase()} ]
              </Text>
            }
          </h1>
          <Table width="920px">
            <Thead>
              <Tr>
                <Th px="1px" mx="0px" width="100px">
                  {status === "playing" && (
                    <Button
                      isDisabled={playersArray.length < 2}
                      bgColor="gray.200"
                      onClick={() => {
                        editPlayers("delete", playersArray.length);
                      }}
                    >
                      -
                    </Button>
                  )}{" "}
                  {status === "playing" && (
                    <Button
                      isDisabled={playersArray.length > 7}
                      bgColor="gray.200"
                      onClick={() => {
                        editPlayers("add", playersArray.length + 1);
                      }}
                    >
                      +
                    </Button>
                  )}
                </Th>
                {playersArray &&
                  playersArray.length &&
                  playersArray.map((player, pk) => (
                    <Th
                      key={pk}
                      width="100px"
                      cursor="pointer"
                      onClick={() => {
                        setActivePlayerIndex(pk);
                        onRenameOpen();
                      }}
                      px="1px"
                      mx="0px"
                      color={"black"}
                      backgroundColor={colorArray[colorIndex[pk]]}
                    >
                      <Center>{player}</Center>
                    </Th>
                  ))}
                <Td></Td>
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
                      onScoreOpen();
                    }}
                  >
                    <Th
                      backgroundColor={ck % 2 === 0 ? "gray.50" : "gray.100"}
                      display="flex"
                      cursor="pointer"
                      flexDirection="row"
                      justifyContent="space-evenly"
                    >
                      <Center>
                        <Text>{category.name.toUpperCase()}</Text>{" "}
                        {category.description && (
                          <Text paddingLeft="3px" paddingRight="0px">
                            <Tooltip label={category.description} fontSize="sm">
                              <InfoOutlineIcon />
                            </Tooltip>
                          </Text>
                        )}
                      </Center>
                    </Th>
                    {category.scores &&
                      (category.scores.length > 0
                        ? pullScoresIntoArray(
                            category,
                            playersArray.length,
                          ).map((value, vk) => (
                            <Td key={vk} p="0px" backgroundColor={"white"}>
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
                <Th backgroundColor={"gray.50"}>
                  TOTAL <ViewIcon /> <ViewOffIcon />
                </Th>
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
            isOpen={isScoreOpen}
            changeCategory={changeCategory}
            position={position}
            onClose={onScoreClose}
            playersArray={playersArray}
            setGameState={setGameState}
          />
          <RenameModal
            editPlayers={editPlayers}
            isOpen={isRenameOpen}
            colorIndex={colorIndex}
            setColorIndex={setColorIndex}
            activePlayerIndex={activePlayerIndex}
            playersArray={playersArray}
            onClose={onRenameClose}
          />
        </div>
        <Button
          my={"30px"}
          backgroundColor={"teal.100"}
          onClick={() => toggleJson()}
        >
          JSON
        </Button>{" "}
        {status === "playing" && (
          <Button
            bgColor="teal.200"
            onClick={() => {
              // setStatus("finished");
              alert("take a picture or screenshot");
            }}
          >
            FINISH
          </Button>
        )}
        {json && <pre>{gameObject}</pre>}
      </>
    );
  }
};

export default Scoreboard;
