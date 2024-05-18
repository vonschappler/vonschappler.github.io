import { useSelector } from "react-redux";

import { Footer as FooterEn } from "../fragments/en";
import { Footer as FooterPt } from "../fragments/pt";

const Footer = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <footer className="footer">
      {isEnglish ? <FooterEn /> : <FooterPt />}
    </footer>
  );
};

export default Footer;
