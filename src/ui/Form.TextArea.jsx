import {
  TextField as BaseTextField,
  InputAdornment,
  Box,
  Grid,
} from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

import FormError from "./Form.Error";

const TextField = forwardRef((props, ref) => {
  return <BaseTextField {...props} ref={ref} multiline />;
});
TextField.displayName = "TextField";

const FormTextArea = ({
  className = "",
  startIcon,
  endIcon,
  register,
  charCount,
  InputProps,
  ...props
}) => {
  const { id, type, errors, rows, limit } = props;
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <Box className={`${className}`}>
      <TextField
        error={errors && true}
        rows={rows}
        className="w-full"
        id={id}
        type={type}
        InputProps={{
          ...InputProps,
          className: `${errors && "error"}`,
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        }}
        {...props}
        {...register}
      />
      {errors && <FormError text={errors.message} />}
      {limit && !errors && (
        <Grid container className="grow justify-end">
          <Grid item className="counter">
            {isEnglish ? (
              <p>
                Char count: {charCount}/{limit}
              </p>
            ) : (
              <p>
                Limite de caracteres: {charCount}/{limit}
              </p>
            )}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default FormTextArea;
