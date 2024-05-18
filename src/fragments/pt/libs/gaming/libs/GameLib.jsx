import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  CheckCircle,
  CircleOutlined,
  Pending,
  PlayCircle,
  ReplayCircleFilled,
  StopCircle,
} from "@mui/icons-material";

import { gamesData as rows } from "../../../../../assets/data/index.js";
import { gamesColsPt as columns } from "../../../../../features/games/gamesColDefs.jsx";

import Table from "../../../../../ui/Table.jsx";
import Title from "../../../../../ui/Title.jsx";

const sortModel = [{ field: columns.at(3).field, sort: "desc" }];

const GameLib = () => {
  return (
    <Grid container className="flex flex-col justify-center gap-4">
      <Grid
        container
        className="flex flex-col items-center lg:grid lg:grid-cols-[65%_30%] lg:justify-center"
      >
        <Grid item className="mx-auto w-[85%]  lg:w-[90%]">
          <Table
            columns={columns}
            initialRows={rows}
            sortModel={sortModel}
            className="shadow-von dark:shadow-von-inverted"
          />
          <Grid
            item
            className="highlight mt-[1rem] flex h-fit w-full flex-col justify-start gap-4 p-4"
          >
            <h3 className="font-title">Legenda:</h3>
            <Grid
              item
              className="flex flex-row justify-around gap-2 px-4 xl:grid xl:grid-cols-1"
            >
              <Grid className="flex flex-col gap-2 xl:mx-auto xl:grid xl:!w-[90%] xl:grid-cols-[30%_30%_30%] ">
                <Grid className="flex flex-row items-center gap-2">
                  <CheckCircle /> <span>Concluídos / faltando conquistas</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <PlayCircle /> <span>Jognando atualmente</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <ReplayCircleFilled /> <span>Jogando casualmente</span>
                </Grid>
              </Grid>
              <Grid className="l flex flex-col gap-2 xl:mx-auto xl:grid xl:!w-[90%] xl:grid-cols-[30%_30%_30%]">
                <Grid className="flex flex-row items-center gap-2">
                  <Pending />{" "}
                  <span>Arquivados / jogados em capanhas publicitárias</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <CircleOutlined /> <span>Nunca joguei</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <StopCircle />
                  <span>Parei de jogar</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className="highlight mt-[1rem] flex !max-h-[300px] !min-h-fit flex-col justify-start gap-4 overflow-y-auto p-4 lg:mt-0 lg:!max-h-[750px] "
        >
          <Grid item>
            <Title divider className="">
              <h3 className="font-title">Informações adicionais:</h3>
            </Title>
          </Grid>
          <Grid item className="px-4">
            <ul className="px-4">
              <li>
                Jogos marcados com (*) possuem tempo de jogo incorreto, seja
                pela falta de informações ou pela impossibilidade de calcular o
                tempo total de jogo
              </li>
              <li>
                Jogos marcados com (**) são em sua maioria jogos online que
                foram descontinuados
              </li>
              <li>
                Jogos marcados com (+) são jogos que possuo em contas
                alternativas e foram importados para a conta principal
              </li>
              <li>
                Jogos marcados com (VR) são jogos com suporte a VR, mesmo que eu
                não jogue em VR
              </li>
              <li>
                Jogos marcados com (Remastered) são jogos os quais eu também
                possuo a versão remasterizada do mesmo
              </li>
              <li>
                DLCs e "edições epeciais" não estão listadas aqui = essas
                informações foram mescladas com o titulo principal do jogo para
                tornar os dados dispostos mais fáceis de gerenciar
              </li>
              <li>
                Eu fiz o possível para classificar os jogos da forma mais
                precisa, considerando a legenda dos status mostrados na tabela
              </li>
            </ul>
            <Grid item className="pt-2 text-center">
              <span className="text-xs opacity-75">
                Os dados aqui mostrados foram obtidos utilizando duas aplicações
                unificadoras de bibliotecas de jogos:{" "}
                <Link
                  to="https://www.gog.com/galaxy"
                  target="_blank"
                  className="pageLink"
                >
                  GoG Galaxy 2.0
                </Link>{" "}
                e{" "}
                <Link
                  to="https://playnite.link/"
                  target="_blank"
                  className="pageLink"
                >
                  Playnite
                </Link>
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { GameLib };
