import { Grid } from "@mui/material";

const HeroStream = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Lives</h1>
      </Grid>
      <Grid item>
        <p>Conheça um pouco mais sobre minhas lives e utilidades do chatbot</p>
        <span className="text-center text-xs">
          Por que essa página possui tabelas, a visualização pode parecer
          "quebrada".
          <br />É aconselhável trocar a orientação do dispositivo ou utilizar um
          dipositivo com uma tela maior.
        </span>
      </Grid>
    </Grid>
  );
};

export default HeroStream;
