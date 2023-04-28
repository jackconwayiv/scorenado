import axios from "axios";
import { useState } from "react";
import { Game } from "./Models";
import ScoreRowColumn from "./ScoreRowColumn";

interface ScoreRowProps {
  gameId: number;
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
  categoryName: string;
  categoryId: number;
  playersArray: Array<string | null>;
}

const ScoreRow = ({
  gameId,
  setGameState,
  categoryName,
  categoryId,
  playersArray,
}: ScoreRowProps) => {
  const [val1, setVal1] = useState<string | null>(null);
  const [val2, setVal2] = useState<string | null>(null);
  const [val3, setVal3] = useState<string | null>(null);
  const [val4, setVal4] = useState<string | null>(null);
  const [val5, setVal5] = useState<string | null>(null);
  const [val6, setVal6] = useState<string | null>(null);
  const [val7, setVal7] = useState<string | null>(null);
  const [val8, setVal8] = useState<string | null>(null);

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
      categoryId,
    };
    await axios.post(`/api/score`, scoreSubmission);
    // should do error handling, check status code
    const { data } = await axios.get<Game>(`/api/games/${gameId}`);
    setGameState(data);
  };

  return (
    <div>
      {JSON.stringify(playersArray)}

      <form>
        <tr>
          <td width="5px">{categoryName.toUpperCase()}</td>
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
