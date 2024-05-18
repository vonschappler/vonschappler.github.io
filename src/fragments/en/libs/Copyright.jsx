import { Grid, Divider } from "@mui/material";

const Copyright = () => {
  return (
    <Grid
      container
      className="copyright flex content-center items-center justify-center gap-3 pt-5"
    >
      <Grid item>
        <Divider variant="middle" className="divider inverted" />
      </Grid>
      <Grid item className="w-[75%] grow justify-self-center md:w-[100%]">
        <p>
          This website was developed using Vite, React, Material UI among other
          technologies, using Visual Studio Code as main code editor.
        </p>
      </Grid>
      <Grid item>&copy; 2010-{new Date().getFullYear()}</Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export { Copyright };
