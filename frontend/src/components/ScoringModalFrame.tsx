import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Category, Game } from "../Models";
import ScoringModalBody from "./ScoringModalBody";

interface ScoringModalFrameProps {
  gameId: number;
  category: Category;
  isOpen: boolean;
  onClose: () => void;
  changeCategory: (val: number) => void;
  position: string;
  playersArray: string[];
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
}

const ScoringModalFrame = ({
  gameId,
  category,
  isOpen,
  onClose,
  changeCategory,
  position,
  setGameState,
  playersArray,
}: ScoringModalFrameProps) => {
  const initialRef = React.useRef(null);

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
          <ScoringModalBody
            gameId={gameId}
            setGameState={setGameState}
            playersArray={playersArray}
            category={category}
            initialRef={initialRef}
          />
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

export default ScoringModalFrame;
