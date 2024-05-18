import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";

import FeaturesCommands from "./Features.Commands";
import FeaturesQuotes from "./Features.Quotes";
import FeaturesSongs from "./Features.Songs";
import { useTheme } from "@mui/material/styles";

const Panel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      {...other}
    >
      {value === index && <Grid>{children}</Grid>}
    </div>
  );
};

const FeaturesContent = () => {
  const { value } = useSelector((state) => state.currentTab);
  const theme = useTheme();
  return (
    <SwipeableViews
      index={value}
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      className="w-full rounded-b-lg border-none bg-von-lightGray p-0 text-von-darkGray dark:bg-von-darkGray dark:text-von-lightGray"
    >
      <Panel value={value} index={0}>
        <FeaturesCommands />
      </Panel>
      <Panel value={value} index={1}>
        <FeaturesQuotes />
      </Panel>
      <Panel value={value} index={2}>
        <FeaturesSongs />
      </Panel>
    </SwipeableViews>
  );
};

export { FeaturesContent };
