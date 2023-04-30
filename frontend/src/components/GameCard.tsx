import { Card, Center, WrapItem } from "@chakra-ui/react";
import { brightArray, gradientArray } from "../colorArray";

interface GameCardProps {
  index: number;
  callback: any;
  text: string;
  type: string;
  id: number;
}

const GameCard = ({ index, callback, text, id, type }: GameCardProps) => {
  return (
    <WrapItem>
      <Card
        border={type === "newTemplate" ? `2px gray dashed` : `2px black solid`}
        bgGradient={
          type === "newTemplate"
            ? `linear(to-br, gray.100, gray.400)`
            : `linear(to-br, ${brightArray[index + 4 || 0]}, ${
                gradientArray[index + 4 || 0]
              })`
        }
        cursor={type === "newTemplate" ? "cell" : "pointer"}
        textAlign={"center"}
        boxShadow={"xl"}
        rounded={"2xl"}
        padding={"10px"}
        onClick={type === "newTemplate" ? () => callback() : () => callback(id)}
        key={index}
      >
        <Center w="200px" h="200px">
          <span
            color={type === "newGame" ? "black" : "gray"}
            style={
              type === "newTemplate"
                ? { fontSize: "100px" }
                : { fontSize: "18px" }
            }
            className="pixelated"
          >
            {type === "newGame" && `New`} {type === "loadGame" && `Load`}{" "}
            {text.toUpperCase()} {type === "loadGame" && `#${id}`}
          </span>
        </Center>
      </Card>
    </WrapItem>
  );
};
export default GameCard;
