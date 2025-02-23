import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import "./styles/global.scss";
import "./styles/_fonts.scss";
import "./styles/_text.scss";
import "./styles/_links.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /* </React.StrictMode> */
);
