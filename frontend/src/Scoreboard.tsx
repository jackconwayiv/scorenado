import { Center, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import colorArray from "./Colors";
import { Category, Game } from "./Models";

interface ScoreboardProps {
  gameState: Game;
  playersArray: Array<string | null>;
}

const Scoreboard = ({ gameState, playersArray }: ScoreboardProps) => {
  const pullScoresIntoArray = (category: Category) => {
    return [
      category.scores[0].value1,
      category.scores[0].value2,
      category.scores[0].value3,
      category.scores[0].value4,
      category.scores[0].value5,
      category.scores[0].value6,
      category.scores[0].value7,
      category.scores[0].value8,
    ];
  };

  return (
    <div>
      <div>Scoreboard</div>
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
                  backgroundColor={ck % 2 === 0 ? "gray.100" : "gray.200"}
                >
                  <Center key={ck + 8000}>{category.name.toUpperCase()}</Center>
                </Th>
                {category.scores &&
                  category.scores.length > 0 &&
                  pullScoresIntoArray(category).map((value, vk) => (
                    <Td key={vk + 3000} backgroundColor={"white"}>
                      <Center key={vk + 7000}>{value}</Center>
                    </Td>
                  ))}
              </Tr>
            ))}
          <Tr>
            <Th backgroundColor={"gray.50"}>TOTAL</Th>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default Scoreboard;
