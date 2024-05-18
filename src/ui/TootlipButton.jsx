import {
  Tooltip as BaseTooltip,
  IconButton as BaseIconButton,
  Button as BaseButton,
  Avatar as BaseAvatar,
  Box,
} from "@mui/material";

const TooltipButton = ({ children, ...props }) => {
  const { open, text } = props;
  return (
    <Box>
      {props?.type === "icon" && (
        <BaseTooltip {...props} arrow open={open} title={text}>
          <BaseIconButton className="iconButton" {...props}>
            {children}
          </BaseIconButton>
        </BaseTooltip>
      )}
      {props?.type === "button" && (
        <BaseTooltip {...props} arrow open={open} title={text}>
          <BaseButton className="button" {...props}>
            {children}
          </BaseButton>
        </BaseTooltip>
      )}
      {props?.type === "avatar" && (
        <BaseTooltip {...props} arrow open={open} title={text}>
          <BaseAvatar {...props} className="avatar" />
        </BaseTooltip>
      )}
    </Box>
  );
};

export default TooltipButton;
