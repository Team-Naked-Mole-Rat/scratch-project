import "./styles/Login.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navigation/Navbar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
