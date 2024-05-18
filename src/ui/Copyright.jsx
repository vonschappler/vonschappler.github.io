import { useSelector } from "react-redux";

import { Copyright as CopyEn } from "../fragments/en";
import { Copyright as CopyPt } from "../fragments/pt";

const Copyright = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return <>{isEnglish ? <CopyEn /> : <CopyPt />}</>;
};

export default Copyright;
