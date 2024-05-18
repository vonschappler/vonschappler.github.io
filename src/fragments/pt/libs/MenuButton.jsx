import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";

import {
  toggleDarkMode,
  setLanguage,
} from "../../../features/view/viewFeatures.slice";

import TooltipButton from "../../../ui/TootlipButton";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Settings,
} from "@mui/icons-material";
import Flag from "../../../ui/Flag";

const MenuButton = ({ handleOpen, handleClose, anchor }) => {
  const { isDarkMode } = useSelector((state) => state.viewSettings);
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
    handleClose();
  };
  const handleEnglish = () => {
    dispatch(setLanguage());
    handleClose();
  };
  return (
    <>
      <TooltipButton
        text="View Settings"
        type="icon"
        aria-controls="settings"
        aria-haspopup="true"
        onClick={handleOpen}
        placement="bottom-end"
      >
        <Settings />
      </TooltipButton>
      <Menu
        id="settings"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchor)}
        onClose={handleClose}
        className="menu mr-0 mt-2"
        keepMounted
      >
        <MenuItem
          onClick={handleDarkMode}
          // onClick={handleClose}
          className="menuItem m-0 min-w-[100%] grow p-0"
          role="button"
        >
          {!isDarkMode ? (
            <span className="flex items-center gap-2">
              <DarkModeOutlined /> Modo escuro
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <LightModeOutlined /> Modo claro
            </span>
          )}
        </MenuItem>
        <MenuItem
          onClick={handleEnglish}
          className="menuItem m-0 min-w-[100%] grow p-0"
          role="button"
        >
          <span className="flex items-center gap-2">
            <Flag country="US" /> Site em Inglês
          </span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuButton;
