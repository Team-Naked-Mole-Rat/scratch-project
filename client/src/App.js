import "./styles/css/public_navbar.css";
import "./styles/css/public_App.css";
import "./styles/css/public_signin.css";
import "./styles/css/public_modal.css";
// import "css/styles.css'"

import React from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.js";
import BackgroundImage from "./components/visual/BackgroundImage.js";
import { ModalProvider } from "./components/visual/ModalContext.js";

const App = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router} />

      <BackgroundImage />
    </ModalProvider>
  );
};

export default App;
