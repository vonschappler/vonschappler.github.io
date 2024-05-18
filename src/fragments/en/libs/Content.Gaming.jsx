import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";

import Title from "../../../ui/Title";
import CardVideo from "../../../ui/Card.Video";
import ArticleDetail from "../../../ui/ArticleDetail";
import { gameLibEn } from "../../../constants/siteConstants";

const ContentGaming = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState("");
  const handleToggle = (article) => {
    isOpen ? setContent(null) : setContent(article.content);
    isOpen ? setTitle("") : setTitle(article.title);
    setIsOpen((curr) => !curr);
  };
  return (
    <>
      <Grid container className="mb-[4rem] flex flex-col items-center">
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>I play games for fun...</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid
            container
            className="mx-auto grid w-[60%] grid-cols-1 content-center items-center justify-center gap-5 md:gap-4 lg:grid-cols-[auto_1fr] lg:gap-4"
          >
            <Grid item className="flex flex-col gap-2">
              <p className="text-center font-title font-bold">
                ... always looking for new challenges, because challenging
                myself does not make me a toxic or elitist player.
              </p>
              <p className="text-center font-title font-bold">
                In fact, I hate those behaviors and do not condone those who act
                like that.
              </p>
            </Grid>
            <Grid item className="flex justify-center">
              <CardVideo
                src="https://www.youtube.com/embed/xzAaiED-79U"
                content={<h2>NieR: Automata</h2>}
                height={200}
              />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Games are part of my life since I was 5 years old. I enjoy playing
              them as a way to give myself some challenges to make my brain
              busy. I like to play "group activities" on online games (mostly)
              by myself (when possible) or try to complete games in the hardest
              available difficulty mode.
            </p>
            <p>
              The fun for me is to test my limits and things go even better IF I
              can overcome those limits. Of course that, like any other human
              would do, if those challenges prove to be extremely frustrating, I
              have to give up (briefly) on them to try again later with more
              dedication and preparation.
            </p>
          </Grid>

          <Grid item className="w-full space-y-3">
            <p>
              Although I have some <strong>competitive games</strong> on my
              library, I do my best to do not play in this mood to not risk
              removing the joy of playing them. I really prefer playing single
              player games or only games with a few{" "}
              <strong>selected people</strong> to enjoy the most of it.
            </p>
          </Grid>
        </Grid>
        <Grid item className="w-[30%] pt-[2rem]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>I don't care about how old games are...</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid
            container
            className="mx-auto grid w-[60%] grid-cols-1 content-center items-center justify-center gap-5 md:gap-4 lg:grid-cols-[auto_1fr] lg:gap-4"
          >
            <Grid item className="flex flex-col gap-2">
              <p className="text-center font-title font-bold">
                ... because what really matters to me is having fun as I am
                playing games!
              </p>
            </Grid>
            <Grid item className="float-left flex justify-center">
              <CardVideo
                src="https://www.youtube.com/embed/PJmniUdNhrY"
                content={<h2>Neverwinter</h2>}
                height={200}
              />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              The definition of "fun" is something personal. What is fun for me,
              may or may not be fun for you also. One thing though, I can say
              for sure: I am not the kind of person who sticks to a single game.
              I play what I want, when I want. My selection of games have
              various genres, from which I can name the ones a most like:
            </p>
            <ul className="space-y-2 px-4">
              <li>MMORPGs</li>
              <li>Shooter-looter</li>
              <li>RPG Single-player</li>
              <li>Hack'n Slash</li>
              <li>History-rich games</li>
              <li>Platformer/Metroidvania</li>
              <li>Fighting</li>
            </ul>
          </Grid>

          <Grid item className="w-full space-y-3">
            <p>
              I am always looking for new games to test and if I like them, of
              course continue playing as much as they keep bringing me joy.
            </p>
            <p className="highlight py-4 text-center">
              I'd like also to mention that I have{" "}
              <Link
                className="pageLink"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(gameLibEn);
                }}
              >
                organized my game library
              </Link>
              , with some information about the games, like release dates and
              time spent playing each one of them.
            </p>
          </Grid>
        </Grid>
        <Grid item className="w-[30%] pt-[2rem]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>My personal preference is to play on PC...</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid
            container
            className="mx-auto grid w-[60%] grid-cols-1 content-center items-center justify-center gap-5 md:gap-4 lg:grid-cols-[auto_1fr] lg:gap-4"
          >
            <Grid item className="flex flex-col gap-2">
              <p className="text-center font-title font-bold">
                ... although my first contact with games was on consoles, with
                an Atari 2600!
              </p>
            </Grid>
            <Grid item className="float-left flex justify-center">
              <CardVideo
                src="https://www.youtube.com/embed/kF3TwbYYPto"
                content={<h2>Killer Instinct 2013</h2>}
                height={200}
              />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Even though I have experienced gaming on consoles, from{" "}
              <strong>Atari</strong> to <strong>Playstation 3</strong>, my
              presonal preference for playing games on PCs. I guess there is no
              need to point all the advantages of having a reasonable PC for
              gaming, but I really need to mention that a reasonable built
              computer can handle gaming for much longer than a last generation
              console.
            </p>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              I also need to add an important factor for my preference:{" "}
              <strong>
                my computer is not only my gaming plataform but it's mainly my tool
                for working
              </strong>
              ! Here I can <strong>code</strong>,{" "}
              <strong>
                create my own arts for use on streams and where else I need
              </strong>
              , <strong>I can contact with my friends and customers</strong>, as
              well as do many other things that a console would not allow me to.
            </p>
          </Grid>
        </Grid>
        <Grid item className="w-[30%] pt-[2rem]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>Game Reviews</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              In this section I'll add some game reviews whenever I have time -
              keep in touch and check my reviewes when they are posted!
            </p>
          </Grid>
        </Grid>
      </Grid>
      <ArticleDetail
        handleToggle={handleToggle}
        open={isOpen}
        content={content}
        title={title}
      />
    </>
  );
};

export { ContentGaming };
