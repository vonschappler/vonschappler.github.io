import { useSelector } from "react-redux";

import { ContentStream as ContentEn } from "../fragments/en";
import { ContentStream as ContentPt } from "../fragments/pt";

const Schedule = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default Schedule;
