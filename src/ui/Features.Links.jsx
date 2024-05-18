import { Tab, Tabs as BaseTabs, Box } from "@mui/material";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as MuiIcons from "@mui/icons-material";

import { featuresEn, featuresPt } from "../constants/navlinks";
import { changeTab } from "../features/displayTabs/displayTabs.slice";

const Tabs = forwardRef((props, ref) => {
  return <BaseTabs ref={ref} {...props} />;
});

Tabs.displayName = "Tabs";

const getIcon = (ref) => {
  const Icon = MuiIcons[ref];
  return <Icon />;
};

const FeaturesLinks = ({ ...props }) => {
  const { value } = useSelector((state) => state.currentTab);
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(changeTab(value));
  };
  const features = isEnglish ? featuresEn : featuresPt;
  return (
    <Box className="navBar internal">
      <Tabs
        value={value}
        className="transition-all"
        variant="scrollable"
        {...props}
        allowScrollButtonsMobile
      >
        {features.map((feature, index) => {
          const { label, icon } = feature;
          return (
            <Tab
              id={label}
              key={index}
              icon={icon && getIcon(icon)}
              iconPosition="start"
              value={index}
              label={label}
              className="!navItem !max-h-[48px]"
              onClick={() => handleChange(index)}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default FeaturesLinks;
