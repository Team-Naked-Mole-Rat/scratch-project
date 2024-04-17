import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/* <h1>Application Root</h1> */}
      <div className="navBar-outer-wrapper">
        <nav>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="signin"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Signin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Signin2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="plants"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              My Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="error"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Error Page
            </NavLink>
          </li>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
