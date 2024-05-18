import { Grid, Divider } from "@mui/material";

const Title = ({ children, divider }) => {
  return (
    <>
      <Grid container className="flex justify-center gap-4 py-5">
        {children}
      </Grid>
      {divider && <Divider variant="middle" className="divider" />}
    </>
  );
};

export default Title;
