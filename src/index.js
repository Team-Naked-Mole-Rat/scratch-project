import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store.js";
import "tailwindcss/tailwind.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
