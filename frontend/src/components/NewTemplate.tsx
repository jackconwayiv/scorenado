import { Box, Button, Center, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import colorArray from "../colorArray";
import CategoryCreatorRow from "./CategoryCreatorRow";

interface CategoryObject {
  name: string;
  description: string;
  isScored: boolean;
  isManualTotal: boolean;
}

const NewTemplate = () => {
  //TEMPLATE
  //id
  //name
  //scoredByRound
  //lowScoreWins

  const [templateName, setTemplateName] = useState("");
  const [scoredByRounds, setScoredByRounds] = useState(false);
  const [lowScoreWins, setLowScoreWins] = useState(false);
  const [categories, setCategories] = useState<CategoryObject[]>([
    { name: "", description: "", isScored: true, isManualTotal: false },
    { name: "", description: "", isScored: true, isManualTotal: false },
    { name: "", description: "", isScored: true, isManualTotal: false },
  ]); //array of objects

  const blankCategory = {
    name: "",
    description: "",
    isScored: true,
    isManualTotal: false,
  };

  //did I write my own reducer?
  const updateCategoryState = (value: any, index: number, action: string) => {
    let newCategoryArray = [...categories];
    switch (action) {
      case "name":
        newCategoryArray[index].name = value;
        break;
      case "description":
        newCategoryArray[index].description = value;
        break;
      case "isScored":
        newCategoryArray[index].isScored = value;
        break;
      case "isManualTotal":
        newCategoryArray[index].isManualTotal = value;
        break;
      case "add":
        newCategoryArray.push(blankCategory);
        break;
      case "delete":
        newCategoryArray = newCategoryArray.filter((cat, i) => i !== index);
        break;
      default:
        break;
    }
    setCategories(newCategoryArray);
  };

  const handleTemplateSubmit = () => {
    const newTemplate = { name: templateName, scoredByRounds, lowScoreWins };
    //axios create a template
    //axios create a bunch of categories all attached to the new template ID
  };

  return (
    <div>
      <h1 className="pixelated" style={{ marginBottom: "20px" }}>
        New Game Template:
      </h1>
      <Box
        flexDirection={"row"}
        margin={"10px"}
        padding={"10px"}
        border={"2px solid black"}
        backgroundColor={colorArray[0]}
        rounded={"2xl"}
        boxShadow={"lg"}
      >
        <Flex>
          <Box width="50%" p={"5px"} display={"flex"}>
            Game Name:
            <Input
              value={templateName}
              bgColor={"white"}
              border={"1px solid gray"}
              width="80%"
              onChange={(e) => setTemplateName(e.target.value)}
            />
          </Box>
          <Box p={"5px"} width="25%">
            <Center>
              <Checkbox
                onChange={() => setScoredByRounds(!scoredByRounds)}
                isChecked={scoredByRounds}
                backgroundColor={"white"}
              />{" "}
              Scored by Rounds?
            </Center>
          </Box>
          <Box p={"5px"} width="25%">
            <Center>
              <Checkbox
                onChange={() => setLowScoreWins(!lowScoreWins)}
                isChecked={lowScoreWins}
                backgroundColor={"white"}
              />{" "}
              Low Score Wins?
            </Center>
          </Box>
        </Flex>
      </Box>
      {categories.map((category, index) => {
        return (
          <CategoryCreatorRow
            category={category}
            updateCategoryState={updateCategoryState}
            index={index}
            key={index}
          />
        );
      })}

      <Button
        border={"1px solid gray"}
        backgroundColor={"teal.200"}
        isDisabled={categories.length > 11}
        onClick={() => updateCategoryState(1, 1, "add")}
      >
        ADD
      </Button>

      <Button
        border={"1px solid gray"}
        backgroundColor={"yellow"}
        isDisabled={!templateName || !categories[0].name}
        onClick={() => handleTemplateSubmit()}
      >
        SUBMIT TEMPLATE
      </Button>
    </div>
  );
};
export default NewTemplate;
