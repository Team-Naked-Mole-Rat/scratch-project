
import React from "react";
import NavBar from "./components/navbar/NavBar.js";

import "./styles/css/public_navbar.css";
import "./styles/css/public_signin.css";
import "./styles/css/public_modal.css";
// import "css/styles.css'"

import BackgroundImage from "./components/visual/BackgroundImage.js";

const App = () => {

  return (
    <>
      <BackgroundImage />
      <NavBar/>
    </>
  );
};

export default App;
