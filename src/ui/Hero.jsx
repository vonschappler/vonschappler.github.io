import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Hero = ({ children, className = "" }) => {
  const { pathname } = useLocation();
  const { navBarHeight, isEnglish } = useSelector(
    (state) => state.viewSettings,
  );
  const [style, setStyle] = useState({});
  useEffect(() => {
    const newStyle = {
      marginTop: `${navBarHeight}px`,
    };
    setStyle(newStyle);
  }, [navBarHeight]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      key={`${pathname}-${isEnglish}`}
    >
      <Grid
        container
        style={style}
        className={`hero ${className} transition-all duration-700`}
      >
        {children}
      </Grid>
    </motion.div>
  );
};

export default Hero;
