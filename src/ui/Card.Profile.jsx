import { Card, CardContent, CardMedia, Grid, Divider } from "@mui/material";
import IconCustom from "./IconCustom";
import {
  faQuoteLeftAlt,
  faQuoteRightAlt,
} from "@fortawesome/free-solid-svg-icons";

const CardProfile = ({ children, quote = "" }) => {
  return (
    <Card className="card w-![90%] items-center lg:w-[700px]">
      <Grid container className="flex flex-col lg:flex-row">
        <Grid item>
          <CardMedia
            component="img"
            height={155}
            width={155}
            image="./img/vonCloseUp.png"
          />
        </Grid>
        <Grid item>
          <CardContent>{children}</CardContent>
        </Grid>
      </Grid>
      <Divider variant="middle" className="divider inverted" />
      <Grid container className="flex justify-center p-4">
        <Grid item className="cardDescription flex flex-row items-center gap-1">
          <IconCustom icon={faQuoteLeftAlt} />
          <span className="text-center">{quote}</span>
          <IconCustom icon={faQuoteRightAlt} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardProfile;
