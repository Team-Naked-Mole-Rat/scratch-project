import "./styles/css/public_navbar.css";
import "./styles/css/public_signin.css";
import "./styles/css/public_modal.css";
// import "css/styles.css'"

import React from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.js";
import BackgroundImage from "./components/visual/BackgroundImage.js";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <BackgroundImage />
    </>
  );
};

export default App;
