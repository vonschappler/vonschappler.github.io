import { useSelector } from "react-redux";

import { ContentNews as ContentEn } from "../fragments/en";
import { ContentNews as ContentPt } from "../fragments/pt";

const News = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default News;
