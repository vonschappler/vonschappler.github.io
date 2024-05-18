import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import NotFound from "../pages/NotFound";
import Error from "../pages/ErrorPage";
const ErrorFallback = () => {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const path = window.location.href;
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <NotFound
          path={path}
          backButton={
            <Button className="button" onClick={() => navigate(-1)}>
              {isEnglish ? "Go Back" : "Voltar"}
            </Button>
          }
        />
      ) : (
        <Error
          error={error}
          backButton={
            <Button className="button" onClick={() => navigate(-1)}>
              {isEnglish ? "Go Back" : "Voltar"}
            </Button>
          }
        />
      )}
    </>
  );
};

export default ErrorFallback;
