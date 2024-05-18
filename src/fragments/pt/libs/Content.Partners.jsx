import { Grid } from "@mui/material";
import { mdiTwitch } from "@mdi/js";

import { partnersTwPt } from "../../../constants/siteConstants";

import CardAvatar from "../../../ui/Card.Avatar";
import Title from "../../../ui/Title";
import IconCustom from "../../../ui/IconCustom";

const ContentPartners = () => {
  return (
    <Grid container className="highlight my-5 flex flex-col">
      <Title divider className="text-center">
        <h1>
          <IconCustom svgFile={mdiTwitch} size={2}>
            Twitch Streamers e Amigos
          </IconCustom>
        </h1>
      </Title>
      <Grid item>
        <Grid container className="partners my-5 !px-[1rem]">
          {partnersTwPt.map((partner) => (
            <Grid item key={partner.username}>
              <CardAvatar partner={partner} />
            </Grid>
          ))}
          <CardAvatar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentPartners };
