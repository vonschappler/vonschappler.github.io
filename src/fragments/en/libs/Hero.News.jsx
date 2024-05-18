import { Grid } from "@mui/material";

const HeroNews = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>News</h1>
      </Grid>
      <Grid item>
        <p>
          Here you can read articles I have written with some news and opinions
        </p>
      </Grid>
    </Grid>
  );
};

export default HeroNews;
