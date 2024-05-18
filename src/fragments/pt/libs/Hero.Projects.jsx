import { Grid } from "@mui/material";

const HeroProjects = () => {
  return (
    <Grid container className="center flex flex-col">
      <Grid item className="title">
        <h1>Projetos</h1>
      </Grid>
      <Grid item>
        <p>
          Conheça um pouco do trabalho de von Schappler como um desenvolvedor de
          softwares
        </p>
        <span className="text-center text-xs">
          Os projetos estão organizados em ordem alfabética, ao invés de estarem
          organizados por data de lançamento ou publicação.
          <br />
          As datas listadas são referentes à versão mais atualizada.
        </span>
      </Grid>
    </Grid>
  );
};

export default HeroProjects;
