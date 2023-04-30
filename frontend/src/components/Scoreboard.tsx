import {
  Center,
  Heading,
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
import ScoringModalFrame from "./ScoringModalFrame";

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
      <Heading>{gameState.template.name} Scoreboard</Heading>
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
              <Tr key={ck + 4000}>
                <Th
                  key={ck + 2000}
                  onClick={() => {
                    setActiveCategoryIndex(ck);
                    onOpen();
                  }}
                  backgroundColor={ck % 2 === 0 ? "gray.100" : "gray.200"}
                >
                  <Center key={ck + 8000}>{category.name.toUpperCase()}</Center>
                </Th>
                {category.scores &&
                  category.scores.length > 0 &&
                  pullScoresIntoArray(category, playersArray.length).map(
                    (value, vk) => (
                      <Td key={vk + 3000} backgroundColor={"white"}>
                        <Center key={vk + 7000}>{value}</Center>
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
                  template={gameState.template}
                />
              );
            })}
          </Tr>
        </Tbody>
      </Table>
      <ScoringModalFrame
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
