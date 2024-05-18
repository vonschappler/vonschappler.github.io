import { Tab, Tabs as BaseTabs } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as MuiIcons from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

import { navPt as navLinks } from "../../../constants/navlinks";
import { getNavHeight } from "../../../features/view/viewFeatures.slice";

const Tabs = forwardRef((props, ref) => {
  return <BaseTabs ref={ref} {...props} />;
});

Tabs.displayName = "Tabs";

const getIcon = (ref) => {
  const Icon = MuiIcons[ref];
  return <Icon />;
};

const Links = ({ reference, ...props }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [path, setPath] = useState(pathname);
  const handleChangePath = (value) => {
    setPath(value);
  };
  useEffect(() => {
    dispatch(getNavHeight(reference.current.clientHeight));
  });
  return (
    <Tabs
      ref={reference}
      value={path}
      className="transition-all"
      variant="scrollable"
      {...props}
      allowScrollButtonsMobile
    >
      {navLinks.map((navLink, index) => {
        const { link, path, icon } = navLink;
        return (
          <Tab
            to={path}
            key={index}
            LinkComponent={NavLink}
            icon={icon && getIcon(icon)}
            label={link}
            iconPosition="start"
            value={path}
            className="navItem !max-h-[48px]"
            onClick={() => handleChangePath(path)}
          />
        );
      })}
    </Tabs>
  );
};

export default Links;
