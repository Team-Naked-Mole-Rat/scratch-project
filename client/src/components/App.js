import "./../styles/LoginPage.css";
import React, { useState } from "react";
import LoginPage from "./public/LoginPage";
import SignUpPage from "./public/SignUpPage";

import ErrorPage from "./navigation/ErrorPage";

import { Routes, Route } from "react-router-dom";
import navBarLinks from "./navigation/navBarLinks";

const App = () => {
  return (
    <div>
      <navBarLinks />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<ErrorPage />} />

        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

{
  /* function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
} */
}

export default App;
