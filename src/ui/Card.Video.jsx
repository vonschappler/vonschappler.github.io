import { Card, CardMedia, CardActions, CardContent } from "@mui/material";

const CardVideo = ({ src, content, actions, height }) => {
  const iframeHeight = height && height;
  const iframeWidth = height && (height * 16) / 9;

  return (
    <Card className="card video" style={{ width: iframeWidth }}>
      <CardMedia
        component="iframe"
        src={
          src ??
          "https://www.youtube.com/embed/?autoplay=1&list=PLcaut-OCCxJcIRXKvw8TneucFGJ_9CYTY&listType=playlist&loop=1&modestbranding=1&start=1?autohide=true&autoplay=auto&color=%23444444&hq=true&jsapi=false&modestbranding=true"
        }
        style={{ height: iframeHeight }}
        allowFullScreen
      />
      {content && (
        <CardContent className="max-h-[110px] overflow-y-auto bg-von-darkGray !py-1 text-center text-von-lightGray dark:bg-von-lightGray dark:text-von-darkGray">
          <span className="cardDescription">{content}</span>
        </CardContent>
      )}
      {actions && <CardActions className="!m-0 !p-0">{actions}</CardActions>}
    </Card>
  );
};

export default CardVideo;
