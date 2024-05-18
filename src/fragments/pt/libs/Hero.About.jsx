import { Grid } from "@mui/material";

const HeroAbout = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Sobre</h1>
      </Grid>
      <Grid item>
        <p>Conheça um pouco mais sobre von Schappler, nesse questionário</p>
      </Grid>
    </Grid>
  );
};

export default HeroAbout;
