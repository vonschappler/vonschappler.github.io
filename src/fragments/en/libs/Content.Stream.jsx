import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { Cancel, CheckCircle } from "@mui/icons-material";

import Accordion from "../../../ui/Accordion";
import Calendar from "../../../ui/Calendar";
import Title from "../../../ui/Title";
import FeaturesLayout from "../../../ui/Features.Layout";

const ContentStream = () => {
  return (
    <Grid
      container
      className="mb-[4rem] mt-[2rem] flex flex-col items-center gap-6"
    >
      <Grid item className="mx-auto w-[85dvw]">
        <Accordion
          title={
            <Title divider>
              <h1>Stream schedule</h1>
            </Title>
          }
          height="65"
          className="mx-auto w-[85dvw]"
          defaultExpanded
        >
          <Grid
            container
            className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-[65%_30%] lg:justify-center"
          >
            <Grid item className="mx-auto w-[85%] lg:w-[90%]">
              <Calendar />
            </Grid>
            <Grid
              item
              className="highlight -mt-[2rem] flex !max-h-[600px] !min-h-fit flex-col justify-start gap-4 bg-von-lightGray p-4 lg:mt-0 dark:bg-von-darkGray"
            >
              <Grid item>
                <Title divider className="">
                  <h3 className="font-title">Additional information:</h3>
                </Title>
              </Grid>
              <Grid item className="px-4">
                <ul>
                  <li>
                    Stream time may differ from what you see, because the
                    official time is set to GTM-3
                  </li>
                  <li>
                    Stream sessions may be skipped and/or delayed based on a few
                    "conditions":
                    <ul className="px-4">
                      <li>Frequent mood changes during the day</li>
                      <li>Free time after work-day to set up everything</li>
                      <li>Anxiety crisis</li>
                      <li>
                        Weather factors - this impact on my internet
                        connectivity
                      </li>
                    </ul>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Accordion>
      </Grid>
      <Grid item className="mx-auto w-[85dvw]">
        <Accordion
          title={
            <Title divider>
              <h1>Chatbot Features</h1>
            </Title>
          }
          height="65"
          className="mx-auto w-[85dvw]"
        >
          <Grid
            container
            className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-[65%_30%] lg:justify-center"
          >
            <Grid item className="mx-auto w-[85%] lg:w-[90%]">
              <Grid item>
                <FeaturesLayout />
              </Grid>
              <Grid
                item
                className="highlight -mt-[1rem] flex h-fit w-full flex-col justify-start gap-4 bg-von-lightGray p-4 lg:mt-0 dark:bg-von-darkGray"
              >
                <h3 className="font-title">Label:</h3>
                <Grid item className="flex flex-col gap-4 px-4">
                  <Grid className="flex flex-row items-center gap-2">
                    <CheckCircle />{" "}
                    <span>
                      The command answer can be translated using{" "}
                      <strong className="font-semibold">!lang [arg]</strong>{" "}
                      command
                    </span>
                  </Grid>
                  <Grid className="flex flex-row items-center gap-2">
                    <Cancel />{" "}
                    <span>
                      The command does not have a translation to its answer
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              className="highlight mt-[0.4rem] flex !max-h-[300px] !min-h-fit flex-col justify-start gap-4 overflow-y-auto bg-von-lightGray p-4 lg:mt-0 lg:!max-h-[830px] dark:bg-von-darkGray"
            >
              <Grid item>
                <Title divider className="">
                  <h3 className="font-title">Additional information:</h3>
                </Title>
              </Grid>
              <Grid item className="px-4">
                <ul>
                  <li>
                    All commands from the <strong>Commands</strong> tab can be
                    used directly on{" "}
                    <strong className="font-semibold">
                      chatbot_vonschappler
                    </strong>{" "}
                    whisper, by using{" "}
                    <strong className="font-semibold">
                      /w chatbot_vonschappler !command (-w) (arg)/[arg]
                    </strong>
                  </li>
                  <li>
                    Before using (-w) accepted by some commands, remember to
                    allow whispers from accounts, because that's the reason this
                    argument exists - to use the chatbot via whispers
                  </li>
                  <li>
                    When a command requires a specific argument, it will be
                    noted as [arg_name], eg. <strong>[username]</strong>
                  </li>
                  <li>
                    When a command accepts optional arguments, it will be noted
                    as (arg_name), eg. <strong>(-w)</strong>
                  </li>
                  <li>
                    <strong>Cost</strong> references to how many "bot points"
                    it's required to use the command - do not mistake this with
                    Twitch channel points
                  </li>
                  <li>
                    For the full list of commands from the chatbot, check{" "}
                    <Link
                      className="pageLink"
                      to="https://rebrand.ly/vonFullCommands"
                      target="_blank"
                    >
                      this reference
                    </Link>
                    .
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export { ContentStream };
