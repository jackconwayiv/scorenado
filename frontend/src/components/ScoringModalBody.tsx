import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category, Game } from "../Models";
import pullScoresIntoArray from "../pullScoresIntoArray";
import ScoreRowColumn from "./ScoreRowColumn";

interface ScoreSubmission {
  gameId: number;
  categoryId: number;
  [key: string]: number | null;
}

interface ScoringModalBodyProps {
  gameId: number;
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
  category: Category;
  playersArray: Array<string | null>;
}
const ScoringModalBody = ({
  gameId,
  setGameState,
  category,
  playersArray,
}: ScoringModalBodyProps) => {
  const [scoresArray, setScoresArray] = useState<Array<number | null>>([]);

  //one state array of scores for this category

  useEffect(() => {
    if (category && category.scores && category.scores.length > 0) {
      setScoresArray(pullScoresIntoArray(category));
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

  //loops numberOfPlayers times and makes a score column for each player
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
      {JSON.stringify(scoresArray)}
      <Table>
        <Thead>
          <Tr>
            {playersArray.map((player, pi) => (
              <Th key={pi}>{player}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {/* map over scores array in state */}
            <Td>
              <ScoreRowColumn
                key={1}
                index={0}
                val={scoresArray[0]}
                rewriteScoresArray={rewriteScoresArray}
              />
            </Td>
            {/* {playersArray.length > 1 && (
              <Td>
                <ScoreRowColumn key={2} val={val2} valSetter={setVal2} />
              </Td>
            )}
            {playersArray.length > 2 && (
              <Td>
                <ScoreRowColumn key={3} val={val3} valSetter={setVal3} />
              </Td>
            )}
            {playersArray.length > 3 && (
              <Td>
                <ScoreRowColumn key={4} val={val4} valSetter={setVal4} />
              </Td>
            )}
            {playersArray.length > 4 && (
              <Td>
                <ScoreRowColumn key={5} val={val5} valSetter={setVal5} />
              </Td>
            )}
            {playersArray.length > 5 && (
              <Td>
                <ScoreRowColumn key={6} val={val6} valSetter={setVal6} />
              </Td>
            )}
            {playersArray.length > 6 && (
              <Td>
                <ScoreRowColumn key={7} val={val7} valSetter={setVal7} />
              </Td>
            )}
            {playersArray.length > 7 && (
              <Td>
                <ScoreRowColumn key={8} val={val8} valSetter={setVal8} />
              </Td>
            )} */}
          </Tr>
        </Tbody>
      </Table>
      <Button onClick={(e: any) => handleSubmit(e)}>Score</Button>
    </div>
  );
};

export default ScoringModalBody;
