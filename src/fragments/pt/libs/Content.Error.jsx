import { Grid, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

import Title from "../../../ui/Title";

const ContentError = ({ error, backButton }) => {
  return (
    <Grid
      container
      className="grid grid-cols-1 content-center items-center justify-center gap-8 pb-[4rem] pt-[4rem]"
    >
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col items-center justify-center gap-4"
      >
        <Grid item className="w-full">
          <Title divider>
            <h1 className="text-center">
              Ops, aconteceu algo de errado por aqui...
            </h1>
          </Title>
        </Grid>
      </Grid>
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col items-center justify-center gap-4"
      >
        <CardMedia
          image="./img/vonSorry.png"
          component="img"
          sx={{ minWidth: "0%", maxWidth: "450px" }}
          className="highlight mx-auto"
        />
      </Grid>
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col justify-center gap-4"
      >
        <p>... e por isso peço desculpas pelo meu código mal feito.</p>
        <p>
          Caso você esteja vendo essa mensagem de forma freqüente, por favor
          entre em{" "}
          <NavLink to="/contact" target="_blank" className="pageLink">
            contato comigo
          </NavLink>
          , com o conteúdo da caixa abaixo:
        </p>
      </Grid>
      <Grid
        item
        className="error errorBox mx-auto max-h-[250px] w-[50%] flex-col gap-3 overflow-y-auto rounded-lg px-6 py-4 text-von-lightGray shadow-von transition-all duration-500 lg:max-h-[400px]"
      >
        <p>
          <strong>Nome do erro: </strong> {error.name}
        </p>
        <p>
          <strong>Mensagem do erro: </strong> {error.message}
        </p>
        <p>
          <strong>Detalhes do erro: </strong>
          <span className="whitespace-pre text-wrap break-words">
            {error.stack}
          </span>
        </p>
      </Grid>
      <Grid item className="mx-auto">
        {backButton}
      </Grid>
    </Grid>
  );
};

export { ContentError };
