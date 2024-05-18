import { Grid } from "@mui/material";

const Content = ({ children, className = "" }) => {
  return (
    <Grid container className={` ${className}`}>
      {children}
    </Grid>
  );
};

export default Content;
