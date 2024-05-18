import { useLocation } from "react-router-dom";

import HeroHome from "./Hero.Home";
import HeroGaming from "./Hero.Gaming";
import HeroPartners from "./Hero.Partners";
import HeroStream from "./Hero.Stream";
import HeroNews from "./Hero.News";
import HeroProjects from "./Hero.Projects";
import HeroAbout from "./Hero.About";
import HeroContact from "./Hero.Contact";

const Hero = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <HeroHome />}
      {pathname === "/gaming" && <HeroGaming />}
      {pathname === "/partners" && <HeroPartners />}
      {pathname === "/stream" && <HeroStream />}
      {pathname === "/news" && <HeroNews />}
      {pathname === "/projects" && <HeroProjects />}
      {pathname === "/contact" && <HeroContact />}
      {pathname === "/about" && <HeroAbout />}
    </>
  );
};

export { Hero };
