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
import { gamesColsEn as columns } from "../../../../../features/games/gamesColDefs.jsx";

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
            <h3 className="font-title">Label:</h3>
            <Grid
              item
              className="flex flex-row justify-around gap-2 px-4 xl:grid xl:grid-cols-1"
            >
              <Grid className="flex flex-col gap-2 xl:mx-auto xl:grid xl:!w-[90%] xl:grid-cols-[30%_30%_30%] ">
                <Grid className="flex flex-row items-center gap-2">
                  <CheckCircle /> <span>Finished / missing achievements</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <PlayCircle /> <span>Currently playing</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <ReplayCircleFilled /> <span>Playing casually</span>
                </Grid>
              </Grid>
              <Grid className="l flex flex-col gap-2 xl:mx-auto xl:grid xl:!w-[90%] xl:grid-cols-[30%_30%_30%]">
                <Grid className="flex flex-row items-center gap-2">
                  <Pending />{" "}
                  <span>Archieved / played on campaign deliveries</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <CircleOutlined /> <span>Not played</span>
                </Grid>
                <Grid className="flex flex-row items-center gap-2">
                  <StopCircle />
                  <span>Stopped playing</span>
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
              <h3 className="font-title">Additional information:</h3>
            </Title>
          </Grid>
          <Grid item className="px-4">
            <ul className="px-4">
              <li>
                Games marked with (*) have innacurate game play, due to missing
                data on the game library unifiers or because there is no way to
                compute the total time for any reason
              </li>
              <li>
                Games marked with (**) are mostly online games which were
                discontinued
              </li>
              <li>
                Games marked with (+) are games that I own on other accounts and
                were imported to my main account
              </li>
              <li>
                Games marked with (VR) are games which support VR, even though I
                don't play VR
              </li>
              <li>
                Games marked with (Remastered) are games which I also have
                Remastered versions
              </li>
              <li>
                DLCs and "editions" are not listed here - they were joint as
                part of the main game to make it easier to manage
              </li>
              <li>
                I did the possible to be as accurate as possible with the
                classification of the games according to the table label
              </li>
            </ul>
            <Grid item className="pt-2 text-center">
              <span className="text-xs opacity-75">
                All game data provided here were obtained from two different
                game libraries unifier applications:{" "}
                <Link
                  to="https://www.gog.com/galaxy"
                  target="_blank"
                  className="pageLink"
                >
                  GoG Galaxy 2.0
                </Link>{" "}
                and{" "}
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
