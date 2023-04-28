import axios from "axios";
import { useEffect, useState } from "react";
import { Category, Game } from "./Models";
import ScoreRowColumn from "./ScoreRowColumn";

interface ScoreRowProps {
  gameId: number;
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
  category: Category;
  playersArray: Array<string | null>;
}

const ScoreRow = ({
  gameId,
  setGameState,
  category,
  playersArray,
}: ScoreRowProps) => {
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

  return (
    <div>
      {JSON.stringify(playersArray)}

      <form>
        <tr>
          <td width="5px">{category.name.toUpperCase()}</td>
          <ScoreRowColumn val={val1} valSetter={setVal1} />
          <ScoreRowColumn val={val2} valSetter={setVal2} />
          <ScoreRowColumn val={val3} valSetter={setVal3} />
          <ScoreRowColumn val={val4} valSetter={setVal4} />
          <ScoreRowColumn val={val5} valSetter={setVal5} />
          <ScoreRowColumn val={val6} valSetter={setVal6} />
          <ScoreRowColumn val={val7} valSetter={setVal7} />
          <ScoreRowColumn val={val8} valSetter={setVal8} />
          <td width="5px">
            <button onClick={(e: any) => handleSubmit(e)}>Score</button>
          </td>
        </tr>
      </form>
    </div>
  );
};

export default ScoreRow;
