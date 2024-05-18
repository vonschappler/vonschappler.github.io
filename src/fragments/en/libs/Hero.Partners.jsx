import { Grid } from "@mui/material";

const HeroPartners = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Partners</h1>
      </Grid>
      <Grid item>
        <p>Those are the individuals and companies who support me</p>
      </Grid>
    </Grid>
  );
};

export default HeroPartners;
