import { Grid, Dialog, CircularProgress } from "@mui/material";

const Loader = ({ text }) => {
  return (
    <Dialog className="spinner modal" open>
      <Grid container className="flex flex-col items-center gap-4 p-6">
        <Grid item>
          <CircularProgress />
        </Grid>
        <Grid item>{text && <p>{text}</p>}</Grid>
      </Grid>
    </Dialog>
  );
};

export default Loader;
