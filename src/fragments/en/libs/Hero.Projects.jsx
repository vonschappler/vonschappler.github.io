import { Grid } from "@mui/material";

const HeroProjects = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Projects</h1>
      </Grid>
      <Grid item>
        <p>Get to know a bit of von Schappler's work as a software developer</p>
        <span className="text-center text-xs">
          Projects are listed here on alphabetically, instead of by their
          release or publish date.
          <br />
          The dates displayed refer to the last version available.
        </span>
      </Grid>
    </Grid>
  );
};

export default HeroProjects;
