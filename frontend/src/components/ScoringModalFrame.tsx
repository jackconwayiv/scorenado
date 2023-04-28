import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Category, Game } from "../Models";
import ScoringModalBody from "./ScoringModalBody";

interface ScoringModalFrameProps {
  gameId: number;
  category: Category;
  isOpen: boolean;
  onClose: () => void;
  playersArray: string[];
  setGameState: React.Dispatch<React.SetStateAction<Game | null>>;
}

const ScoringModalFrame = ({
  gameId,
  category,
  isOpen,
  onClose,
  setGameState,
  playersArray,
}: ScoringModalFrameProps) => {
  return (
    <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Scores for {category.name.toUpperCase()}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ScoringModalBody
            gameId={gameId}
            setGameState={setGameState}
            playersArray={playersArray}
            category={category}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScoringModalFrame;
