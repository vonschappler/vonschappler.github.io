import { Grid } from "@mui/material";

const HeroContact = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Contato</h1>
      </Grid>
      <Grid item>
        <p>Envie-me uma mensagem ou qualquer outra requisição</p>
      </Grid>
    </Grid>
  );
};

export default HeroContact;
