import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  ButtonGroup,
  Divider,
  CardHeader,
} from "@mui/material";

const CardArticle = ({ article = {}, handleClick }) => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const { title, description, creationDate, updateDate, previewImage } =
    article;
  const cardText = {
    createdText: isEnglish ? "Published at: " : "Publicado em: ",
    updateText: isEnglish ? "Updated at: " : "Atualizado em: ",
    readText: isEnglish ? "Read full post" : "Ler o post na íntegra",
  };
  return (
    <Card className="card w-![90%] items-center">
      <CardHeader className="cardHeader pb-0" title={title} />
      {creationDate && (
        <p className="cardDescription px-4 pb-2">
          <span>
            <strong>{cardText.createdText}</strong>
          </span>
          {creationDate}
        </p>
      )}
      {updateDate && (
        <p className="cardDescription">
          <span>
            <strong>{cardText.updateText}</strong>
          </span>
          {updateDate}
        </p>
      )}
      {previewImage && (
        <CardMedia
          component="img"
          height={155}
          width={155}
          image={`./img/${previewImage}`}
        />
      )}

      <Divider className="divider inverted" />
      <CardContent className="max-h-[110px] overflow-y-auto">
        <p className="cardDescription">{description}</p>
      </CardContent>
      <CardActions className="m-0 p-0">
        <ButtonGroup className="grow">
          <Button className="cardButton" onClick={handleClick}>
            {cardText.readText}
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CardArticle;
