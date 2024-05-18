import { Grid } from "@mui/material";
import { Share, SportsEsports, Videocam } from "@mui/icons-material";
import {
  faBattleNet,
  faDiscord,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  mdiFacebook,
  mdiGithub,
  mdiInstagram,
  mdiMicrosoftXbox,
  mdiOrigin,
  mdiSteam,
  mdiUbisoft,
  mdiTwitch,
  mdiYoutubeGaming,
  mdiSpotify,
} from "@mdi/js";

import { Copyright } from "./Copyright";
import IconCustom from "../../../ui/IconCustom";
import IconLink from "../../../ui/IconLink";

const Footer = () => {
  return (
    <>
      <Grid
        container
        className="divivide-red-500 divide-2 flex flex-col items-center justify-around gap-5 md:flex-row"
      >
        <Grid item>
          <p className="flex items-center justify-center gap-2">
            <Share />
            <strong>Mídias sociais</strong>
          </p>
          <Grid container className="flex justify-around gap-4 p-5 pt-3">
            <IconLink className="footerLink" to="https://rebrand.ly/vonDiscord">
              <IconCustom icon={faDiscord} />
            </IconLink>
            <IconLink
              className="footerLink"
              to="https://rebrand.ly/vonFacebook"
            >
              <IconCustom svgFile={mdiFacebook} />
            </IconLink>
            <IconLink className="footerLink" to="https://rebrand.ly/vonGithub">
              <IconCustom svgFile={mdiGithub} />
            </IconLink>
            <IconLink
              className="footerLink"
              to="https://rebrand.ly/vonInstagram"
            >
              <IconCustom svgFile={mdiInstagram} />
            </IconLink>
            <IconLink
              className="footerLink col-span-2"
              to="https://rebrand.ly/vonTwitter"
            >
              <IconCustom icon={faXTwitter} />
            </IconLink>
          </Grid>
        </Grid>
        <Grid item>
          <p className="flex items-center justify-center gap-2 ">
            <SportsEsports />
            <strong>Perfis Gamer</strong>
          </p>
          <Grid container className="flex justify-around gap-4 p-4 pt-3">
            <IconLink
              className="footerLink"
              to="https://rebrand.ly/vonBlizzard"
            >
              <IconCustom icon={faBattleNet} />
            </IconLink>
            <IconLink className="footerLink" to="https://rebrand.ly/vonOrigin">
              <IconCustom svgFile={mdiOrigin} />
            </IconLink>
            <IconLink className="footerLink" to="https://rebrand.ly/vonSteam">
              <IconCustom svgFile={mdiSteam} />
            </IconLink>
            <IconLink className="footerLink" to="https://rebrand.ly/vonUplay">
              <IconCustom svgFile={mdiUbisoft} />
            </IconLink>
            <IconLink
              className="footerLink col-span-2"
              to="https://rebrand.ly/vonXlive"
            >
              <IconCustom svgFile={mdiMicrosoftXbox} />
            </IconLink>
          </Grid>
        </Grid>
        <Grid item>
          <p className="flex items-center justify-center gap-2">
            <Videocam />
            <strong>Canais Online</strong>
          </p>
          <Grid container className="flex justify-around gap-4 p-4 pt-3">
            <IconLink className="footerLink" to="https://rebrand.ly/vonTwitch">
              <IconCustom svgFile={mdiTwitch} />
            </IconLink>
            <IconLink className="footerLink" to="https://rebrand.ly/vonYouTube">
              <IconCustom svgFile={mdiYoutubeGaming} />
            </IconLink>
            <IconLink
              className="footerLink col-span-2"
              to="https://rebrand.ly/vonPodcast"
            >
              <IconCustom svgFile={mdiSpotify} />
            </IconLink>
          </Grid>
        </Grid>
      </Grid>
      <Copyright />
    </>
  );
};

export { Footer };
