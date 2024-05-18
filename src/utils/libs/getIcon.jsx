import {
  CheckCircle,
  CircleOutlined,
  Pending,
  PlayCircle,
  ReplayCircleFilled,
  StopCircle,
  Cancel,
} from "@mui/icons-material";

const getIcon = (n) => {
  switch (n) {
    case 1:
      return (
        <div className="flex items-center justify-center">
          <PlayCircle />
        </div>
      );
    case 2:
      return (
        <div className="flex items-center justify-center">
          <CheckCircle />
        </div>
      );
    case 3:
      return (
        <div className="flex items-center justify-center">
          <ReplayCircleFilled />
        </div>
      );
    case 4:
      return (
        <div className="flex items-center justify-center">
          <CircleOutlined />
        </div>
      );
    case 5:
      return (
        <div className="flex items-center justify-center">
          <Pending />
        </div>
      );
    case 6:
      return (
        <div className="flex items-center justify-center">
          <StopCircle />
        </div>
      );
    case true:
      return (
        <div className="flex items-center justify-center">
          <CheckCircle />
        </div>
      );
    case false:
      return (
        <div className="flex items-center justify-center">
          <Cancel />
        </div>
      );
  }
};

export { getIcon };
