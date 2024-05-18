import { Grid, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import Button from "../../../ui/Button";
import CardVideo from "../../../ui/Card.Video";

const HeroHome = () => {
  return (
    <Grid container className="center flex flex-col items-center">
      <Grid item className="title">
        <h1>Hello! I'm von Schappler!</h1>
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
              I am a{" "}
              <strong>Brazilian autistic Twitch Affiliate streamer</strong>. I
              enjoy playing games, chatting and listening to great tunes. Join
              me and get to know a bit of my world!
            </p>
            <p>
              <strong>Eventually</strong>, I also host some streams where I'm
              working on some coding projects.
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
                {`Visit von Schappler's Twitch...`}
              </Button>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroHome;
