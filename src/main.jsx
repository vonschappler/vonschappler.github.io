import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material";

import "./index.css";
import App from "./App.jsx";

import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
