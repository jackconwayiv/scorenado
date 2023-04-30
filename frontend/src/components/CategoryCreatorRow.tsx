import { Box, Button, Center, Checkbox, Flex, Input } from "@chakra-ui/react";
import colorArray from "../colorArray";

interface CategoryCreatorRowProps {
  category: any;
  updateCategoryState: any;
  index: number;
}

const CategoryCreatorRow = ({
  category,
  updateCategoryState,
  index,
}: CategoryCreatorRowProps) => {
  //CATEGORY
  //id
  //name
  //description
  //isScored
  //isManualTotal
  //templateId

  return (
    <Box
      flexDirection={"column"}
      margin={"10px"}
      padding={"10px"}
      border={"2px solid black"}
      backgroundColor={colorArray[index + 1]}
      rounded={"2xl"}
      boxShadow={"lg"}
    >
      <h1 className="pixelated">Scoring Category {index + 1}</h1>
      <Flex>
        <Box width="50%" p={"5px"} display={"flex"}>
          Category Name:
          <Input
            maxW={"400px"}
            value={category.name}
            backgroundColor={"white"}
            border={"1px solid gray"}
            width="80%"
            onChange={(e) => updateCategoryState(e.target.value, index, "name")}
          />
        </Box>
        <Box p={"5px"} width="25%">
          <Center>
            <Checkbox
              onChange={() =>
                updateCategoryState(!category.isScored, index, "isScored")
              }
              backgroundColor={"white"}
              isChecked={category.isScored}
            />{" "}
            Scored Category?
          </Center>
        </Box>
        <Box p={"5px"} width="25%">
          <Center>
            <Checkbox
              onChange={() =>
                updateCategoryState(
                  !category.isManualTotal,
                  index,
                  "isManualTotal",
                )
              }
              backgroundColor={"white"}
              isChecked={category.isManualTotal}
            />{" "}
            Is Manual Total?
          </Center>
        </Box>
      </Flex>
      <Flex>
        <Box p={"5px"} width="50%" display={"flex"}>
          Category Description:
          <Input
            maxW={"400px"}
            minH={"100px"}
            value={category.description}
            backgroundColor={"white"}
            border={"1px solid gray"}
            width="80%"
            onChange={(e) =>
              updateCategoryState(e.target.value, index, "description")
            }
          />
        </Box>
      </Flex>
      {index > 0 && (
        <Box>
          <Button
            color={"red"}
            backgroundColor={"gray.100"}
            border={"1px solid gray"}
            onClick={() => updateCategoryState(1, index, "delete")}
          >
            DELETE
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default CategoryCreatorRow;
