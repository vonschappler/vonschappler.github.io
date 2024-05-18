import { useSelector } from "react-redux";

import { ContentContact as ContentEn } from "../fragments/en";
import { ContentContact as ContentPt } from "../fragments/pt";

const News = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default News;
