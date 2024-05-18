import { Grid } from "@mui/material";

import { FeaturesContent } from "./Features.Content";
import FeaturesLinks from "./Features.Links";

const FeaturesLayout = () => {
  return (
    <Grid container className="mb-[2rem] flex w-full justify-center">
      <FeaturesLinks />
      <FeaturesContent />
    </Grid>
  );
};

export default FeaturesLayout;
