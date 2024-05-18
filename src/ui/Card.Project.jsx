import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  ButtonGroup,
  Divider,
} from "@mui/material";

const CardProject = ({ project = {}, type }) => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const {
    title,
    description,
    creationDate,
    releaseDate,
    version,
    previewImage,
    previewURL,
    codeURL,
    docsURL,
    downURL,
  } = project;
  const cardText = {
    descText: isEnglish ? "Description: " : "Descrição: ",
    createdText: isEnglish ? "Pubilshed at: " : "Publicado em: ",
    releaseText: isEnglish ? "Released at: " : "Lançado em: ",
    versionText: isEnglish ? "Current version: " : "Última versão: ",
    previewText: isEnglish ? "Preview" : "Visitar site",
    codeText: isEnglish ? "View code" : "Ver código",
    guideText: isEnglish ? "User's guide" : "Manual",
    downloadText: isEnglish ? "Download" : "Baixar",
  };
  return (
    <Card className="card w-![90%] items-center">
      <CardMedia
        component="img"
        height={155}
        width={155}
        image={`./img/${previewImage}`}
      />
      <CardContent className="max-h-[110px] overflow-y-auto">
        <p className="cardTitle">{title}</p>
        <p className="cardDescription">
          <span>
            <strong>{cardText.descText}</strong>
          </span>
          {description}
        </p>
        {creationDate && (
          <p className="cardDescription">
            <span>
              <strong>{cardText.createdText}</strong>
            </span>
            {creationDate}
          </p>
        )}
        {releaseDate && (
          <p className="cardDescription">
            <span>
              <strong>{cardText.releaseText}</strong>
            </span>
            {releaseDate}
          </p>
        )}
        {version && (
          <p className="cardDescription">
            <span>
              <strong>{cardText.versionText}</strong>
            </span>
            {version}
          </p>
        )}
      </CardContent>
      <CardActions className="m-0 p-0">
        <ButtonGroup className="grow">
          {previewURL && (
            <>
              <Button
                className="cardButton"
                LinkComponent={Link}
                to={previewURL}
                target="_blank"
              >
                {cardText.previewText}
              </Button>
              <Divider orientation="vertical" className="divider " />
            </>
          )}
          <Button
            className="cardButton"
            LinkComponent={Link}
            to={codeURL}
            target="_blank"
          >
            {cardText.codeText}
          </Button>
          {type === "script" && (
            <>
              <Divider orientation="vertical" className="divider " />
              <Button
                className="cardButton"
                LinkComponent={Link}
                to={docsURL}
                target="_blank"
              >
                {cardText.guideText}
              </Button>
              <Divider orientation="vertical" className="divider " />
              <Button
                className="cardButton"
                LinkComponent={Link}
                to={downURL}
                target="_blank"
              >
                {cardText.downloadText}
              </Button>
            </>
          )}
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CardProject;
