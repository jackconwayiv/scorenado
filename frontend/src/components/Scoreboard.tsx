import {
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import colorArray from "../Colors";
import { Game } from "../Models";
import pullScoresIntoArray from "../pullScoresIntoArray";
import ScoreboardTotalCell from "./ScoreboardTotalCell";
import ScoringModal from "./ScoringModal";

interface ScoreboardProps {
  gameState: Game;
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
  playersArray: Array<string>;
}

const Scoreboard = ({
  gameState,
  setGameState,
  playersArray,
}: ScoreboardProps) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const changeCategory = (val: number) => {
    setActiveCategoryIndex(activeCategoryIndex + val);
  };

  const determinePosition = (num: number) => {
    let position: string = "";
    if (num === 0) {
      position = "beginning";
    } else if (num === gameState.template.categories.length - 1) {
      position = "end";
    } else position = "middle";
    return position;
  };

  const position = determinePosition(activeCategoryIndex);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <h1 style={{ marginTop: "20px" }} className="pixelated">
        Scoreboard for {gameState.template.name} Game 00{gameState.id}
      </h1>
      <Table>
        <Thead>
          <Tr>
            <Th>CATEGORY</Th>
            {playersArray &&
              playersArray.length &&
              playersArray.map((player, pk) => (
                <Th
                  key={pk + 1000}
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
                <Th backgroundColor={ck % 2 === 0 ? "gray.100" : "gray.200"}>
                  <Center>{category.name.toUpperCase()}</Center>
                </Th>
                {category.scores &&
                  category.scores.length > 0 &&
                  pullScoresIntoArray(category, playersArray.length).map(
                    (value, vk) => (
                      <Td key={vk} backgroundColor={"white"}>
                        <Center>{value}</Center>
                      </Td>
                    ),
                  )}
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
  );
};

export default Scoreboard;
