import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StyleSheetManager } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isDark"}>
      <GlobalStyles />
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
