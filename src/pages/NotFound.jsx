import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ContentNotFound as ContentEn } from "../fragments/en";
import { ContentNotFound as ContentPt } from "../fragments/pt";

const NotFound = ({ path, backButton }) => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  useEffect(() => {
    isEnglish
      ? (document.title = "[Page not Found] - von Schappler Website")
      : (document.title = "[Página não Encontrada] - von Schappler Website");
  }, [isEnglish]);
  return (
    <>
      {isEnglish ? (
        <ContentEn backButton={backButton} path={path} />
      ) : (
        <ContentPt backButton={backButton} path={path} />
      )}
    </>
  );
};

export default NotFound;
