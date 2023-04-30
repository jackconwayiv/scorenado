import { Flex, Wrap } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Template } from "../Models";
import GameCard from "./GameCard";

const NewGame = () => {
  const navigate = useNavigate();

  const [allGameTemplates, setAllGameTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get(`/api/templates`);
      setAllGameTemplates(data);
    };
    fetchTemplates();
  }, []);

  const createNewGame = async (id: number) => {
    const { data } = await axios.post(`/api/templates/${id}`);
    navigate(`/game/${data.id}`);
  };

  return (
    <div>
      <Flex flexDirection={"row"} justifyContent={"space-evenly"}>
        <Wrap>
          {allGameTemplates &&
            allGameTemplates.length > 0 &&
            allGameTemplates.map((template, index) => {
              return (
                <GameCard
                  key={index}
                  type={"newGame"}
                  index={index}
                  callback={createNewGame}
                  text={template.name}
                  id={template.id}
                />
              );
            })}
          <GameCard
            type={"newTemplate"}
            index={0}
            callback={() => alert("new template time")}
            text={"+"}
            id={0}
          />
        </Wrap>
      </Flex>
    </div>
  );
};
export default NewGame;
