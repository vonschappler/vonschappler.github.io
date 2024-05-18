import { useSelector } from "react-redux";

import { ContentGaming as ContentEn } from "../fragments/en";
import { ContentGaming as ContentPt } from "../fragments/pt";

const Gaming = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default Gaming;
