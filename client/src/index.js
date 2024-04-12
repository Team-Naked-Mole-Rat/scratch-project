import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "tailwindcss/tailwind.css";
import {BrowserRouter as Router} from 'react-router-dom'

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
