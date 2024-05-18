import { FormHelperText as BaseFormHelperText } from "@mui/material";
import { forwardRef } from "react";

const FormHelperText = forwardRef((props, ref) => {
  return <BaseFormHelperText {...props} ref={ref}></BaseFormHelperText>;
});
FormHelperText.displayName = "FormHelperText";

const FormError = ({ text, className, ...props }) => {
  return (
    <FormHelperText
      className={`formError !transition-all !duration-700 ${className}`}
      {...props}
    >
      {text}
    </FormHelperText>
  );
};

export default FormError;
