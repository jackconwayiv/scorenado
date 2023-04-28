import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category, Game } from "./Models";
import ScoreRowColumn from "./ScoreRowColumn";

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
  const [val1, setVal1] = useState<number | null>(null);
  const [val2, setVal2] = useState<number | null>(null);
  const [val3, setVal3] = useState<number | null>(null);
  const [val4, setVal4] = useState<number | null>(null);
  const [val5, setVal5] = useState<number | null>(null);
  const [val6, setVal6] = useState<number | null>(null);
  const [val7, setVal7] = useState<number | null>(null);
  const [val8, setVal8] = useState<number | null>(null);

  useEffect(() => {
    if (category && category.scores && category.scores.length) {
      setVal1(category.scores[0].value1);
      setVal2(category.scores[0].value2);
      setVal3(category.scores[0].value3);
      setVal4(category.scores[0].value4);
      setVal5(category.scores[0].value5);
      setVal6(category.scores[0].value6);
      setVal7(category.scores[0].value7);
      setVal8(category.scores[0].value8);
    }
  }, [category, category.scores]);

  //loops numberOfPlayers times and makes a score column for each player
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const scoreSubmission = {
      value1: val1,
      value2: val2,
      value3: val3,
      value4: val4,
      value5: val5,
      value6: val6,
      value7: val7,
      value8: val8,
      gameId,
      categoryId: category.id,
    };
    if (category.scores.length > 0) {
      await axios.put(`/api/score`, scoreSubmission);
    } else {
      await axios.post(`/api/score`, scoreSubmission);
    }
    // should do error handling, check status code
    const { data } = await axios.get<Game>(`/api/games/${gameId}`);
    setGameState(data);
  };

  // const concatenator = (index: number) => {
  //   return { val: `val${index}`, valSetter: `setVal${index}` };
  // };

  // const renderDataFields = (category: Category) => {
  //   const scoreArray = pullScoresIntoArray(category);
  //   scoreArray.map((score, index) => (
  //     <td>
  //       <input
  //         value={score}
  //         onChange={(e) => {
  //           `setVal${index + 1}`;
  //           parseInt(e.target.value);
  //         }}
  //       ></input>
  //     </td>
  //   ));
  // };

  return (
    <div>
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
            <Td>
              <ScoreRowColumn key={1} val={val1} valSetter={setVal1} />
            </Td>
            {playersArray.length > 1 && (
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
            )}
          </Tr>
        </Tbody>
      </Table>
      <Button onClick={(e: any) => handleSubmit(e)}>Score</Button>
    </div>
  );
};

export default ScoringModalBody;
