import { Grid } from "@mui/material";

const HeroStream = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Stream</h1>
      </Grid>
      <Grid item>
        <p>Get in touch with my stream schedule and chatbot features</p>
        <span className="text-center text-xs">
          Because this is a page with tables, visualization on small screens may
          seem "broken".
          <br />I recommend changing the orientation of the device or looking at
          this page using a larger screen device.
        </span>
      </Grid>
    </Grid>
  );
};

export default HeroStream;
