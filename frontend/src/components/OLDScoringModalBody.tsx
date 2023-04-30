import {
  Button,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import colorArray from "../Colors";
import { Category, Game } from "../Models";
import pullScoresIntoArray from "../pullScoresIntoArray";
import ScoringModalRowColumn from "./ScoringModalRowColumn";

interface ScoreSubmission {
  gameId: number;
  categoryId: number;
  [key: string]: number | null;
}

interface ScoringModalBodyProps {
  gameId: number;
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
  category: Category;
  playersArray: Array<string>;
}
const ScoringModalBody = ({
  gameId,
  setGameState,
  category,
  playersArray,
}: ScoringModalBodyProps) => {
  const [scoresArray, setScoresArray] = useState<Array<number | null>>([]);

  // ========

  useEffect(() => {
    if (category && category.scores && category.scores.length > 0) {
      setScoresArray(pullScoresIntoArray(category, playersArray.length));
    } else {
      setScoresArray(
        playersArray.map((player) => {
          return null;
        }),
      );
    }
  }, [category, playersArray]);

  const rewriteScoresArray = (index: number, value: number) => {
    const newArray = [...scoresArray];
    newArray[index] = value;
    setScoresArray(newArray);
  };

  const buildScoreSubmission = () => {
    let scoreSubmission: ScoreSubmission = { gameId, categoryId: category.id };
    scoresArray.forEach((score, i) => {
      return (scoreSubmission[`value${i + 1}`] = score);
    });
    return scoreSubmission;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const scoreSubmission = buildScoreSubmission();
    if (category.scores[0] && category.scores[0].id) {
      await axios.put(`/api/score`, scoreSubmission);
    } else {
      await axios.post(`/api/score`, scoreSubmission);
    }
    // should do error handling, check status code
    const { data } = await axios.get<Game>(`/api/games/${gameId}`);
    setGameState(data);
  };

  return (
    <div>
      <Table minW="300px" maxW="700px">
        <Thead>
          <Tr>
            {playersArray.map((player, pi) => (
              <Th
                key={pi}
                minWidth={"10px"}
                maxWidth={"12px"}
                p={"5px"}
                color={"black"}
                backgroundColor={colorArray[pi]}
              >
                <Center>{player}</Center>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {scoresArray &&
              scoresArray.map((score, idx) => {
                return (
                  <Td key={idx} minWidth="10px" maxWidth="12px">
                    <ScoringModalRowColumn
                      key={idx}
                      index={idx}
                      val={scoresArray[idx]}
                      rewriteScoresArray={rewriteScoresArray}
                    />
                  </Td>
                );
              })}
          </Tr>
        </Tbody>
      </Table>
      <Button onClick={(e: any) => handleSubmit(e)}>Score</Button>
    </div>
  );
};
//have a -1 or +1 value here that allows handleSubmit to also handle navigating back or forth
export default ScoringModalBody;
