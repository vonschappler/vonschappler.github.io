import { forwardRef } from "react";
import { TextField as BaseTextField, Box, InputAdornment } from "@mui/material";

import FormError from "./Form.Error";

const TextField = forwardRef((props, ref) => {
  return <BaseTextField ref={ref} {...props} />;
});
TextField.displayName = "TextField";

const FormInput = ({
  className = "",
  startIcon,
  endIcon,
  register,
  InputProps,
  ...props
}) => {
  const { id, type, errors } = props;
  return (
    <Box className={`${className}`}>
      <TextField
        error={errors && true}
        id={id}
        type={type}
        autoComplete={id}
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
        className="w-full"
      />
      {errors && <FormError text={errors.message} />}
    </Box>
  );
};

export default FormInput;
