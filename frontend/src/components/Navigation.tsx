import {
  EditIcon,
  HamburgerIcon,
  PlusSquareIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
const Navigation = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>
          <h1
            style={{ fontSize: "40px" }}
            className="pixelated"
            onClick={() => alert("yo")}
          >
            🌪️ Scorenado
          </h1>
        </div>
        <div>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<PlusSquareIcon />} command="⌘N">
                New Game
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Load Game
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                New Template
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <hr style={{ marginBottom: "20px" }} />
    </div>
  );
};
export default Navigation;
