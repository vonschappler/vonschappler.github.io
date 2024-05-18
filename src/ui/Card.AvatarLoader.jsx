import {
  Card,
  CardContent,
  Avatar,
  CardActions,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "./Button";

const CardAvatarLoader = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const buttonText = isEnglish
    ? `Loading info...`
    : `Carregando informações...`;

  return (
    <Card className="card">
      <CardContent className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-3">
        <Skeleton
          className="row-span-2 bg-von-lightGray/50 dark:bg-von-darkGray/50"
          variant="circular"
        >
          <Avatar />
        </Skeleton>
        <p className="cardTitle">
          <Skeleton className=" bg-von-lightGray/50 dark:bg-von-darkGray/50" />
        </p>
        <p className="cardDescription">
          <Skeleton className=" bg-von-lightGray/50 dark:bg-von-darkGray/50" />
        </p>
      </CardContent>
      <CardActions className="p-0">
        <Button
          disabled={true}
          className="cardButton"
          LinkComponent={Link}
          to={`#`}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardAvatarLoader;
