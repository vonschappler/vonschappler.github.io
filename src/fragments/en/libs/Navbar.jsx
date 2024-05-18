import { useRef, useState } from "react";
import { Box } from "@mui/material";

import MenuButton from "./MenuButton";
import Links from "./Links";

const Navbar = ({ className = "" }) => {
  const ref = useRef(null);
  const [navBar, setNavBar] = useState(null);
  const handleCloseMenu = () => {
    setNavBar(null);
  };
  const handleOpenMenu = (e) => {
    setNavBar(e.currentTarget);
  };
  return (
    <Box className={`navBar ${className}`}>
      <Links reference={ref} />
      <MenuButton
        anchor={navBar}
        handleClose={handleCloseMenu}
        handleOpen={handleOpenMenu}
      />
    </Box>
  );
};

export { Navbar };
