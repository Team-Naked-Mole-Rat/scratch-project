import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import ErrorPage from "./components/navigation/ErrorPage";
import LoginPage from "./components/public/LoginPage";

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
