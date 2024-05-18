import { Grid } from "@mui/material";

const HeroContact = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Contact</h1>
      </Grid>
      <Grid item>
        <p>Send your message or any request to me</p>
      </Grid>
    </Grid>
  );
};

export default HeroContact;
