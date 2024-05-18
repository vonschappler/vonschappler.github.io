import { Button as BaseButton } from "@mui/material";

const Button = ({ children, className = "", ...props }) => {
  return (
    <BaseButton className={`button ${className}`} {...props}>
      {children}
    </BaseButton>
  );
};

export default Button;
