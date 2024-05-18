import { useSelector } from "react-redux";

import { ContentHome as ContentEn } from "../fragments/en";
import { ContentHome as ContentPt } from "../fragments/pt";

const Home = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <ContentEn /> : <ContentPt />}</>;
};

export default Home;
