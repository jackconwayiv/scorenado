import { Flex, Wrap } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "../Models";
import GameCard from "./GameCard";

const LoadGame = () => {
  const navigate = useNavigate();

  const [allGames, setAllGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(`/api/games`);
      setAllGames(data);
    };
    fetchGames();
  }, []);

  const loadGame = (id: number) => {
    navigate(`/game/${id}`);
  };

  return (
    <div>
      <h1 className="pixelated">Load Game</h1>
      <Flex flexDirection={"row"} justifyContent={"space-evenly"}>
        <Wrap>
          {allGames &&
            allGames.length > 0 &&
            allGames.map((game, index) => {
              return (
                <GameCard
                  key={index}
                  type={"loadGame"}
                  index={index}
                  callback={loadGame}
                  text={game.template.name}
                  id={game.id}
                />
              );
            })}
        </Wrap>
      </Flex>
    </div>
  );
};
export default LoadGame;
