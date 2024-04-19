import React, { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "./../../features/modals/modalsSlice.js";
import RegisterModal from "./../../pages/Login/RegisterModal.js";
import { useLogoutMutation } from "../../features/api/registerApiSlice.js";
import { clearCredentials } from "../../features/auth/authSlice.js";

function NavBar() {
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const handleOpenModal = useCallback(() => {
    dispatch(openModal({ modalId: "loginSignupModal" }));
  }, [dispatch]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutApiCall().unwrap();
      dispatch(clearCredentials());
    } catch (err) {
      console.log("Error logging out");
      console.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      {/* <h1>Application Root</h1> */}
      <div className="navBar-outer-wrapper">
        <nav className="navBarContent">
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
            <button onClick={handleOpenModal} className="nav-link">
              Signin
            </button>
          </li>
          {/* <li>
            <NavLink
              to="register"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Signin2
            </NavLink>
          </li> */}
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
            <button onClick={handleLogout}>Logout</button>
          </li>
        </nav>
      </div>
      <RegisterModal />
      <Outlet />
    </div>
  );
}

export default NavBar;
