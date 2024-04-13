import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-950">
      <div>
        <ul className="flex justify-between items-center h-12">
          <li className="px-4 text-white hover:text-blue-500">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="px-4 text-white hover:text-blue-500 ml-auto">
            <NavLink to="/login"> Login</NavLink>
          </li>
          <li className="px-4 text-white hover:text-blue-500">
            <NavLink to="/about"> About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
