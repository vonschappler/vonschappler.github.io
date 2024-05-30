import { DevTool } from "@hookform/devtools";

const isDev = import.meta.env.DEV;

const Form = ({ children, className = "", ...props }) => {
  const { control } = props;
  return (
    <>
      <form className={`form ${className}`} {...props}>
        {children}
      </form>
      {isDev && control && (
        <DevTool control={control} placement="bottom-left" />
      )}
    </>
  );
};

export default Form;
