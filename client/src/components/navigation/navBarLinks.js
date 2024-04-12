import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const navBarLinks = () => {
  return (
    <div className="navBar-outer-wrapper">
      <li>
        <NavLink to="/signup"> Signup</NavLink>
      </li>
    </div>
  );
};
export default navBarLinks;
