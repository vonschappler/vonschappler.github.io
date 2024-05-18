import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Main = ({ children, className = "" }) => {
  const { pathname } = useLocation();
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <motion.main
      className={` ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      key={`${pathname}-${isEnglish}`}
    >
      {children}
    </motion.main>
  );
};

export default Main;
