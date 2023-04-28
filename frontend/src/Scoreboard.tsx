import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
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
              playersArray.map((player, pk) => <Th key={pk}>{player}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {gameState.template &&
            gameState.template.categories.length &&
            gameState.template.categories.map((category, ck) => (
              <Tr key={ck}>
                {category.name.toUpperCase()}
                {category.scores &&
                  category.scores.length &&
                  pullScoresIntoArray(category).map((value, vk) => (
                    <Td key={vk}>{value}</Td>
                  ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Scoreboard;
