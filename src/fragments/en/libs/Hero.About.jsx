import { Grid } from "@mui/material";

const HeroAbout = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>About</h1>
      </Grid>
      <Grid item>
        <p>Get to know who is von Schappler, in this small FAQ</p>
      </Grid>
    </Grid>
  );
};

export default HeroAbout;
