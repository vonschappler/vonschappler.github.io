import { Box, Grid, Divider } from "@mui/material";

const FormActions = ({ children, className = "" }) => {
  return (
    <Box className={`formActions ${className}`}>
      <Divider variant="full" className="divider  my-5" />
      <Grid container className="formButtons">
        {children}
      </Grid>
    </Box>
  );
};

export default FormActions;
