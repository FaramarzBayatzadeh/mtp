import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CustomThemeProvider from "./ThemeProvider/CustomThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
