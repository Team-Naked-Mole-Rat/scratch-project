import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorPage from "./pages/NotFound";
import LoginPage from "./pages/Login";

import "tailwindcss/tailwind.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
