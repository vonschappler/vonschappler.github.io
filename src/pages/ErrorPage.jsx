import { useSelector } from "react-redux";

import { ContentError as ContentEn } from "../fragments/en";
import { ContentError as ContentPt } from "../fragments/pt";
import { useEffect } from "react";

const ErrorPage = ({ error, backButton }) => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  useEffect(() => {
    isEnglish
      ? (document.title = "[Error] - von Schappler Website")
      : (document.title = "[Erro] - von Schappler Website");
  }, [isEnglish]);
  return (
    <>
      {isEnglish ? (
        <ContentEn backButton={backButton} error={error} />
      ) : (
        <ContentPt backButton={backButton} error={error} />
      )}
    </>
  );
};

export default ErrorPage;
