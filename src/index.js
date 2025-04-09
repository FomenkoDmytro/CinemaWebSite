import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_variables.scss";
import "./styles/main.scss";
import "./styles/global.scss";
import "./styles/_fonts.scss";
import "./styles/_text.scss";
import "./styles/_links.scss";
import "./styles/_button.scss";
import "./styles/_input.scss";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>

  /* </React.StrictMode> */
);
