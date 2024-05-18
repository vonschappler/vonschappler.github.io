import { DevTool } from "@hookform/devtools";

const Form = ({ children, className = "", ...props }) => {
  const { control } = props;
  return (
    <>
      <form className={`form ${className}`} {...props}>
        {children}
      </form>
      {control && <DevTool control={control} placement="bottom-left" />}
    </>
  );
};

export default Form;
