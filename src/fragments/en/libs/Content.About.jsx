import { Grid, Divider } from "@mui/material";

import CardProfile from "../../../ui/Card.Profile";
import Title from "../../../ui/Title";

const ContentAbout = () => {
  return (
    <Grid container className="mb-[4rem] flex flex-col items-center">
      <Grid item>
        <Title divider>
          <h1 className="text-center">Basic profile</h1>
        </Title>
        <CardProfile quote="Living is playing a game, already knowing that you'll die in the end.">
          <Grid container className="flex w-[100%] flex-col gap-1">
            <Grid item>
              <span className="cardTitle">von Schappler</span>
              <Divider className="divider inverted" />
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Date of Birth:</strong> Nov/08/1983
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Educational degree:</strong> Graduated on Physics (2004)
                and have some CG courses
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Country:</strong> Brazil
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Favorite music style:</strong> Goth (in general)
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Favorite movie genre:</strong> Horror, Drama, Thriller
              </span>
            </Grid>
          </Grid>
        </CardProfile>
      </Grid>
      <Grid item className="w-[30%] pt-4">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">Why von Schappler?</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            So that's one of the questions I've heard the most. Mostly from
            people who know me but do not know my story with RPG PnP (aka RPG
            Storyteller).
          </p>
          <p>
            That said, and answering in a succinct way, von Schappler is the
            surname of one of my RPG characters I used in Vampire: the
            Masquerade adventures, a character I really enjoyed using in this
            game.
          </p>
          <p>
            The name then took its rightful place and since then I started using
            it to represent me in the gamer world.
          </p>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-[2rem]">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">My history with games...</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Alright, let's go! My story with games begins there in mid-1989,
            when I had my first contact with the famous Atari 1600 owned by my
            cousin. I was really glazed with those graphics (sometimes black and
            white) of the game when competing with my cousin in Pong matches.
            After that, I saw those flipper machines with Enduro, but I only
            came to have my first gaming console at the end of 1989 - when I won
            an Atari just like the one my cousin had.
          </p>
          <p>
            From there, I was owned a some other gaming consoles, but always
            being "a generation ago"... Master System, Mega Drive, Nintendo (the
            8bits one), Super Nintendo, Game Boy, Playstantion 2, PSP 2000 - all
            these passed through my hands. But the first PC I won was in 1996,
            and from there I practically left consoles aside and going to enjoy
            PC games.
          </p>
          <p>
            I currently have a reasonable PC, which still allows me to "work"
            and play, in addition to a XBox 360 and a Playstation 3, but I spend
            more time playing on my PC - where I stay about 12h daily, 6h of
            these playing and/or researching about games.
          </p>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-[2rem]">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">The streaming decision was made!</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            In recent years, seeing how all things have been evolving, I
            realized that making content of something that I liked as a child
            would be the chance for me to show off the talent (or lack thereof)
            I have!
          </p>
          <p>
            I started with a YouTube channel using my personal email - where I
            posted some videos. Nothing too serious. They were videos with
            tutorials for some things I used to setup in my characters in the
            game Aion.
          </p>
          <p>
            That's when I realized that many people besides tutorials also made
            gameplay videos. But few of them focused on what I like most in a
            game - the story.
          </p>
          <p>
            It was then when I came with the decision to create vonSchappler
            Gaming, a new channel (which is currently our vonSchapperTV), a
            place where I play what I like, focusing on the story and lore of
            those games.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentAbout };
