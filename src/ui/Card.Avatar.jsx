import { Card, CardContent, Avatar, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "./Button";
import { usePartner } from "../features/partners/usePartner";
import CardAvatarLoader from "./Card.AvatarLoader";

const CardAvatar = ({ partner: user }) => {
  const { data: partner, isLoading } = usePartner({ user });
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const { image, description, displayName, username } = partner;
  const buttonText = user
    ? isEnglish
      ? `Click check <%partner%>'s work...`
      : `Conheça o trabalho de <%partner%>`
    : isEnglish
      ? "Link to your Twitch page"
      : "Link para sua página da Twitch";

  return (
    <>
      {isLoading ? (
        <CardAvatarLoader />
      ) : (
        <Card className="card">
          <CardContent className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-3">
            <Avatar className="row-span-2" src={image} />
            <p className="cardTitle">
              {displayName
                ? displayName
                : isEnglish
                  ? "Your name here?"
                  : "Seu nome aqui?"}
            </p>
            <p className="cardDescription">
              {description
                ? description
                : isEnglish
                  ? "Contact von Schappler to know how!"
                  : "Contate von Schappler e saia como!"}
            </p>
          </CardContent>
          <CardActions className="p-0">
            <Button
              disabled={!user}
              className="cardButton"
              LinkComponent={Link}
              to={`https://twitch.tv/${username}`}
              target="_blank"
            >
              {buttonText.replace("<%partner%>", displayName)}
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default CardAvatar;
