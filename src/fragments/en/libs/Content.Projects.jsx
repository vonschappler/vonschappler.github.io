import { Link, NavLink } from "react-router-dom";
import { Grid, Divider } from "@mui/material";

import { webSitesEn } from "../../../constants/siteConstants";
import { scriptsEn } from "../../../constants/siteConstants";

import Title from "../../../ui/Title";
import CardProject from "../../../ui/Card.Project";

const ContentProjects = () => {
  return (
    <Grid container className="mb-[4rem] flex flex-col items-center">
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider className="text-center">
              <h1 className="text-center">Websites</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            I have taken a few courses and during them, some small website
            projects were developed as main activities/course projects. It's
            important to remember that some projects may not be 100% functional.
            This happens because some of them may depend of external APIs /
            applications which can enter into "sleep mode", if not used
            frequently. In case you find any project in this state, please{" "}
            <NavLink className="pageLink" to="/contact" target="_blank">
              contact me
            </NavLink>
            .
          </p>
          <p>Below, we can se some of them:</p>
        </Grid>
      </Grid>
      <Grid container className="flex flex-col">
        <Grid item>
          <Grid container className="projects my-5 !px-[1rem]">
            {webSitesEn.map((website) => (
              <Grid item key={website.title}>
                <CardProject project={website} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="-pt-4 w-[30%]">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider className="text-center">
              <h1 className="text-center">Streamlabs Chatbot Scripts</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Because I stream, I need a chatbot to help me manage my channel. The
            chatbot I chose to use was{" "}
            <Link
              className="pageLink"
              to="https://streamlabs.com/desktop-chatbot"
              target="_blank"
            >
              Streamlabs Chatbot
            </Link>
            . Between the many reasons for me to have chosen this application as
            my chatbot application, the main one it's the hability of
            customizing it using scripts, made with{" "}
            <strong>Python 2.17.3</strong>.
          </p>
          <p>
            Most of those scripts were made for personal use, while others can
            be used by anyone. The public* scripts are listed below:
          </p>
        </Grid>
        <Grid item className="p-4 text-center text-xs">
          <span>
            * Even though those scripts have open source code, feel free to
            support my hard work by making a donation{" "}
            <Link
              className="pageLink"
              to="https://www.paypal.com/donate?hosted_button_id=FU2Z3XCC9R8D2"
              target="_blank"
            >
              on my Paypal account
            </Link>{" "}
            if you are incluned to support the hard work done!
          </span>
        </Grid>
      </Grid>
      <Grid container className="my-2 flex flex-col">
        <Grid item>
          <Grid container className="projects !px-[1rem]">
            {scriptsEn.map((script) => (
              <Grid item key={script.title}>
                <CardProject project={script} type="script" />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-2">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider className="text-center">
              <h1 className="text-center">von Schappler Chatbot</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Even though I like using <strong>Streamlabs Chatbot</strong>, the
            creators of the application stopped supporting their product on
            behalf of other online products they have on their{" "}
            <Link
              className="pageLink"
              to="https://streamlabs.com"
              target="_blank"
            >
              website
            </Link>
            . This means the bot is not receiving any major updates and it's
            still based on Python 2.17.3.
          </p>
          <p>
            This project is a work in progress and I'm slowly coding it on my
            streams. As soon as the bot is finished, more details will come to
            this section.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentProjects };
