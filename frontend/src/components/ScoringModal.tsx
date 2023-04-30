import {
  Button,
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import colorArray from "../Colors";
import { Category, Game } from "../Models";
import pullScoresIntoArray from "../pullScoresIntoArray";
import ScoringModalRowColumn from "./ScoringModalRowColumn";

interface ScoreSubmission {
  gameId: number;
  categoryId: number;
  [key: string]: number | null;
}
interface ScoringModalProps {
  gameId: number;
  category: Category;
  isOpen: boolean;
  onClose: () => void;
  changeCategory: (val: number) => void;
  position: string;
  playersArray: string[];
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
}

const ScoringModal = ({
  gameId,
  category,
  isOpen,
  onClose,
  changeCategory,
  position,
  setGameState,
  playersArray,
}: ScoringModalProps) => {
  const initialRef = React.useRef(null);

  const [scoresArray, setScoresArray] = useState<Array<number | null>>([]);

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
    <Modal
      isOpen={isOpen}
      size={"xl"}
      onClose={onClose}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent minW="390px" maxW="750px">
        <ModalHeader>
          <Heading size="md">Score {category.name.toUpperCase()}</Heading>
          <Text fontSize="sm">{category.description}</Text>
        </ModalHeader>
        <ModalBody>
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
                            initialRef={initialRef}
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
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            isDisabled={position === "beginning"}
            onClick={() => changeCategory(-1)}
          >
            Previous
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="blue"
            mr={3}
            isDisabled={position === "end"}
            onClick={() => changeCategory(1)}
          >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScoringModal;
