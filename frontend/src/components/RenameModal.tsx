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
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import colorArray from "../colorArray";

interface RenameModalProps {
  editPlayers: (action: string, val: number) => Promise<void>;
  isOpen: boolean;
  playersArray: string[];
  activePlayerIndex: number;
  colorIndex: number[];
  setColorIndex: React.Dispatch<React.SetStateAction<number[]>>;
  onClose: () => void;
}

const RenameModal = ({
  editPlayers,
  isOpen,
  playersArray,
  activePlayerIndex,
  colorIndex,
  setColorIndex,
  onClose,
}: RenameModalProps) => {
  const [newName, setNewName] = useState<string>(
    playersArray[activePlayerIndex],
  );

  const handleColorChange = (val: number) => {
    const newColorIndex = [...colorIndex];
    newColorIndex[activePlayerIndex] = val;
    setColorIndex(newColorIndex);
  };

  useEffect(() => {
    setNewName(playersArray[activePlayerIndex]);
  }, [activePlayerIndex, playersArray]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          backgroundColor={colorArray[colorIndex[activePlayerIndex]]}
        >
          Rename {playersArray[activePlayerIndex]}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newName}
            backgroundColor="white"
            onChange={(e) => setNewName(e.target.value)}
          ></Input>
          <Table>
            <Tbody>
              <Tr>
                {colorArray.slice(0, 8).map((color, index) => {
                  return (
                    <Td
                      key={index}
                      onClick={() => handleColorChange(index)}
                      backgroundColor={color}
                    ></Td>
                  );
                })}
              </Tr>
            </Tbody>
          </Table>
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
