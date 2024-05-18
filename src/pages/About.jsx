import { useSelector } from "react-redux";

import { ContentAbout as ContentEn } from "../fragments/en";
import { ContentAbout as ContentPt } from "../fragments/pt";

const About = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default About;
