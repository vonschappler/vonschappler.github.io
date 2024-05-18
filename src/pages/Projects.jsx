import { useSelector } from "react-redux";

import { ContentProjects as ContentEn } from "../fragments/en";
import { ContentProjects as ContentPt } from "../fragments/pt";

const Projects = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default Projects;
