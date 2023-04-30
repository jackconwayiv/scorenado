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
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();

  //props for command in MenuItem: command="⌘N" command="⌘⇧N" command="⌘O"

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
            style={{ fontSize: "40px", cursor: "pointer" }}
            className="pixelated"
            onClick={() => navigate(`/`)}
          >
            _Scorenado
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
              <MenuItem icon={<PlusSquareIcon />} onClick={() => navigate(`/`)}>
                New Game
              </MenuItem>
              <MenuItem
                icon={<RepeatIcon />}
                onClick={() => navigate(`/games`)}
              >
                Load Game
              </MenuItem>
              <MenuItem icon={<EditIcon />} onClick={() => navigate(`/template`)}>
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
