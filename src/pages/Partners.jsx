import { useSelector } from "react-redux";

import { ContentPartners as ContentEn } from "../fragments/en";
import { ContentPartners as ContentPt } from "../fragments/pt";

const Partners = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default Partners;
