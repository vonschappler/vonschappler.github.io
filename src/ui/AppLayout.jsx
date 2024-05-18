import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { useSelector } from "react-redux";

import Main from "./Main";
import Footer from "./Footer";
import MastHead from "./MastHead";
import { useEffect } from "react";

const AppLayout = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const { pathname } = useLocation();
  const baseTitle = `[<%name%>] - von Schappler website`;
  useEffect(() => {
    let name = "";
    switch (pathname) {
      case "/":
        name = isEnglish ? "Welcome" : "Bem vindos";
        break;
      case "/gaming":
        name = "Gaming";
        break;
      case "/partners":
        name = isEnglish ? "Partners" : "Parcerias";
        break;
      case "/stream":
        name = isEnglish ? "Stream" : "Lives";
        break;
      case "/news":
        name = isEnglish ? "News" : "Novidades";
        break;
      case "/projects":
        name = isEnglish ? "Projects" : "Projetos";
        break;
      case "/contact":
        name = isEnglish ? "Contact" : "Contato";
        break;
      case "/about":
        name = isEnglish ? "About" : "Sobre";
        break;
    }
    document.title = baseTitle.replace("<%name%>", name);
    return;
  }, [pathname, baseTitle, isEnglish]);
  return (
    <>
      <ScrollRestoration />
      <MastHead />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
