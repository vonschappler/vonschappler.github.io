import { Grid, Divider } from "@mui/material";

import Title from "../../../ui/Title";
import { Link } from "react-router-dom";

const ContentHome = () => {
  return (
    <Grid container className="mb-[4rem] flex flex-col items-center">
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">
                "Recently" diagnosed with Asperger's Syndrome
              </h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Unlike most streamers out there, I am an Autistic Streamer, from
            Brazil. I got the last and final diagnosis about my mental health
            status not long ago and it was discovered I have Asperger's
            Syndrome, the mildest type of Autism.
          </p>
          <p>
            I have my own way to think, behave and react to things, so please be
            patient with me, respecting me and you will get the same from me.
            Mutual respect is all I ask from you, since you are here.
          </p>
          <Divider
            className="divider justify-self-around pt-4"
            variant="middle"
          />
          <h2>I stream as a way to deal with my autistic condition</h2>
          <p>
            Although I can change my mood suddenly during my streams or trigger
            any other possible disdorder as consequence of the autistic
            behavior, streaming for me is more like a therapy, I can say. It's
            not easy to deal with such things, but here I am trying to do my
            best.
          </p>
          <p>
            During my streams you will probably experience things you haven't
            saw yet - but one thing remains: IF I AM TOO QUIET, it's part of my
            behavoir, so please try to pull me out of my "own" world.
          </p>
        </Grid>
        <Grid item className="p-4 text-center text-xs">
          <span className="font-sm text-center">
            To know more about Asperger's Syndrome, check{" "}
            <Link
              to="https:/rebrand.ly/AspergerEN"
              className="pageLink"
              target="_blank"
            >
              this wikipedia article
            </Link>
            .
          </span>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-4">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid
          container
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr]"
        >
          <Grid item className="w-full">
            <Grid item>
              <Title>
                <h2 className="text-center">
                  I usually don't follow the "standards"...
                </h2>
              </Title>
            </Grid>
            <Grid item className="space-y-3">
              <p className="text-center">
                I really don't excel by my gameplay abilities or such things. I
                also don't like doing what other people do. I do what I want,
                when I want. Well, it's my stream, my space, so it's fair for me
                to take such decisions.
              </p>
              <p className="text-center">
                My stream are mostly formed by three "main acts":
              </p>
              <p className="text-center">
                <strong>1. Welcome Act:</strong> that moment when I talk with my
                viewers
              </p>
              <p className="text-center">
                <strong>2. Gameplay Act:</strong> that moment when I get to play
                something
              </p>
              <p className="text-center">
                <strong>3. Goodbye Act:</strong> that moment when I finish the
                stream
              </p>
            </Grid>
          </Grid>
          <Grid item className="hidden p-4 lg:block">
            <Divider
              className="divider"
              variant="middle"
              orientation="vertical"
            />
          </Grid>
          <Grid item className="block p-4 lg:hidden">
            <Divider className="divider" variant="middle" />
          </Grid>
          <Grid item className="w-full">
            <Grid item>
              <Title>
                <h2 className="text-center">So, what to expect then?</h2>
              </Title>
            </Grid>
            <Grid item className="space-y-3">
              <p className="text-center">
                Well, this is not a hard question to answer. You can expect
                someone playing a game, mostly focused on the game (but always
                eager to chat and answer questions when possible).
              </p>
              <p className="text-center">
                Let us not forget that <strong>I AM A HUMAN BEING</strong>,
                meaning I act and react as one. So, things that are offensive to
                me or my community will be punished properly.
              </p>
              <p className="text-center">
                Let's not forget the main reason for me to do this is to have it
                as therapy myself, so let's keep it this way. You are always
                welcome, free to chat, free to ask and interact, sometimes even
                play - who knows? <strong>JUST RESPECT THE LIMITS</strong> and
                we are good!
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentHome };
