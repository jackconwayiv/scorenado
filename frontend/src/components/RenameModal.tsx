import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface RenameModalProps {
  editPlayers: (action: string, val: number) => Promise<void>;
  isOpen: boolean;
  playersArray: string[];
  activePlayerIndex: number;
  onClose: () => void;
}

const RenameModal = ({
  editPlayers,
  isOpen,
  playersArray,
  activePlayerIndex,
  onClose,
}: RenameModalProps) => {
  const [newName, setNewName] = useState<string>(
    playersArray[activePlayerIndex],
  );

  useEffect(() => {
    setNewName(playersArray[activePlayerIndex]);
  }, [activePlayerIndex, playersArray]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Rename {playersArray[activePlayerIndex]}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          ></Input>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              editPlayers(newName, activePlayerIndex + 1);
              onClose();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default RenameModal;
