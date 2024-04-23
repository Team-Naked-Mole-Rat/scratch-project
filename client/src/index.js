import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "tailwindcss/tailwind.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.js"; 
import BackgroundImage from "./components/visual/BackgroundImage.js";


const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>

      <RouterProvider router={router} />   
      {/* SEE router.js for <APP> entry */}
        
    </StrictMode>
  </Provider>
);
