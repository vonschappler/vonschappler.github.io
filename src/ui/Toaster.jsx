import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import { resetFormData } from "../features/emails/emails.slice";

const Toaster = ({ message, className = "", ...props }) => {
  const { alertOpen } = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(resetFormData());
  };
  return (
    <Snackbar
      open={alertOpen}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        sx={{ width: "100%" }}
        className={`alert ${className}`}
        {...props}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
