import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "tailwindcss/tailwind.css";
// import "css/styles.css'"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
