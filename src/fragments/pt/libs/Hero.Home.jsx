import { Grid, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import Button from "../../../ui/Button";
import CardVideo from "../../../ui/Card.Video";

const HeroHome = () => {
  return (
    <Grid container className="center flex flex-col items-center">
      <Grid item className="title">
        <h1>Olá! Eu sou von Schappler!</h1>
      </Grid>
      <Grid
        item
        className="m-auto flex w-[90%] flex-col content-center items-center justify-center gap-5 md:w-[50%] md:gap-4 lg:flex-row lg:gap-[6rem] "
      >
        <Grid
          container
          className="flex flex-col content-center items-center justify-center gap-4 "
        >
          <Grid item className="">
            <Avatar
              src="/img/vonHi5_v2.png"
              className="h-[150px] w-[150px] transition-all duration-700 xl:h-[200px] xl:w-[200px]"
            />
          </Grid>
          <Grid item className="w-[300px]">
            <p>
              Eu sou um <strong>streamer autista, afiliado à Twitch</strong>.
              Gosto de jogar e conversar enquanto eu estou ouvindo boas músicas.
              Junte-se à minha comunidade e venha me conhecer melhor!
            </p>
            <p>
              Também faço, <strong>eventualmente</strong>, algumas streams onde
              estou desenvolvendo algum projeto de programação.
            </p>
          </Grid>
        </Grid>
        <Grid item className="justify-self-center">
          <CardVideo
            actions={
              <Button
                className="cardButton"
                LinkComponent={Link}
                to={`https://twitch.tv/von_schappler`}
                target="_blank"
              >
                {`Visite a Twitch de von Schappler...`}
              </Button>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroHome;
