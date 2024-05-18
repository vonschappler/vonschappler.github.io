import { Grid, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

import Title from "../../../ui/Title";

const ContentNotFound = ({ path, backButton }) => {
  return (
    <Grid
      container
      className="flex h-[100%] flex-col content-center items-center justify-center gap-8 pb-[4rem] pt-[4rem]"
    >
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col items-center justify-center gap-4"
      >
        <Grid item className="w-full">
          <Title divider>
            <h1 className="text-center">I don't know what happened...</h1>
          </Title>
        </Grid>
      </Grid>
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col items-center justify-center gap-4"
      >
        <CardMedia
          image="./img/vonShrug.png"
          component="img"
          sx={{ minWidth: "0%", maxWidth: "450px" }}
          className="highlight mx-auto"
        />
      </Grid>
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col justify-center gap-4 break-words"
      >
        <p>
          ... but I believe that the entered URL <strong>{path}</strong> is
          wrong, because there this page does not exist on this website.
        </p>
        <p>
          If you believe that the typed URL is correct, please{" "}
          <NavLink
            to="/contact"
            target="_blank"
            className="pageLink font-bold no-underline hover:underline"
          >
            contact me
          </NavLink>
          , telling me which URL you were trying to access.
        </p>
      </Grid>
      <Grid item className="mx-auto">
        {backButton}
      </Grid>
    </Grid>
  );
};

export { ContentNotFound };
