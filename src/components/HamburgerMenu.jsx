import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="flex md:hidden bg-transparent border-none shadow-none p-0 hover:shadow-none">
          <GiHamburgerMenu className="text-2xl" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/gallery">Gallery</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default HamburgerMenu;
