import { Card, Center, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Template } from "../Models";
import { brightArray, gradientArray } from "../colorArray";

const NewGame = () => {
  //need to declare a style object and pass it into the mapped cards AND the + card to ensure consistency

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
        {allGameTemplates &&
          allGameTemplates.length > 0 &&
          allGameTemplates.map((template, index) => {
            return (
              <Card
                border={`2px black solid`}
                bgGradient={`linear(to-br, ${brightArray[index + 4]}, ${
                  gradientArray[index + 4]
                })`}
                textAlign={"center"}
                boxShadow={"xl"}
                rounded={"2xl"}
                padding={"10px"}
                onClick={() => createNewGame(template.id)}
                key={template.id}
              >
                <Center w="200px" h="200px">
                  <span style={{ fontSize: "18px" }} className="pixelated">
                    {template.name.toUpperCase()}
                  </span>
                </Center>
              </Card>
            );
          })}
        <Card
          border={`2px black solid`}
          bgGradient={`linear(to-br, gray.100, gray.500)`}
          textAlign={"center"}
          boxShadow={"xl"}
          rounded={"2xl"}
          padding={"10px"}
        >
          <Center w="200px" h="200px">
            <span style={{ fontSize: "100px" }} className="pixelated">
              +
            </span>
          </Center>
        </Card>
      </Flex>
    </div>
  );
};
export default NewGame;
