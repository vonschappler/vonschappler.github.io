import { Grid } from "@mui/material";

const HeroNews = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Novidades</h1>
      </Grid>
      <Grid item>
        <p>
          Aqui é possível ver artigos que escrevi com opionões e novidades
        </p>
      </Grid>
    </Grid>
  );
};

export default HeroNews;
