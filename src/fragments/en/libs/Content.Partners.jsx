import { Grid } from "@mui/material";
import { mdiTwitch } from "@mdi/js";

import { partnersTwEn } from "../../../constants/siteConstants";

import CardAvatar from "../../../ui/Card.Avatar";
import Title from "../../../ui/Title";
import IconCustom from "../../../ui/IconCustom";

const ContentPartners = () => {
  return (
    <Grid container className="highlight my-5 flex flex-col">
      <Title divider className="text-center">
        <h1>
          <IconCustom svgFile={mdiTwitch} size={2}>
            Twitch Streamers and Friends
          </IconCustom>
        </h1>
      </Title>
      <Grid item>
        <Grid container className="partners my-5 !px-[1rem]">
          {partnersTwEn.map((partner) => (
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
