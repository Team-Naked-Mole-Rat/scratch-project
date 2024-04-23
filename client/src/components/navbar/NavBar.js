import React, { useCallback } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from './../../features/modals/modalsSlice.js';
import RegisterModal from './../../pages/Login/RegisterModal.js';
import { useLogoutMutation } from '../../features/api/http_registerSlice.js';
import { clearCredentials } from '../../features/auth/authSlice.js';

function NavBar() {
  const dispatch = useDispatch();

  const { success, userInfo } = useSelector(state => state.auth);
  const userRoles = userInfo?.roles || [];

  const token = localStorage.getItem('token');

  const [ logoutApiCall ] = useLogoutMutation();

  const handleOpenModal = useCallback(() => {
    dispatch(openModal({ modalId: 'loginSignupModal' }));
  }, [dispatch]);

  const handleLogout = async e => {
    e.preventDefault();
    try {
      await logoutApiCall({
        userInfo: {
          username: userInfo.username,
          roles: userInfo.roles,
        },
        token: token,
      }).unwrap();

      dispatch(clearCredentials());
    } catch (err) {
      console.log('Error logging out');
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
                isActive ? 'nav-link nav-link-active' : 'nav-link'
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
          {userRoles.includes('user') && (
            <li>
              <NavLink
                to="plants"
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                My Plants
              </NavLink>
            </li>
          )}

          {!success ? (
            <li>
              <button onClick={handleOpenModal} className="nav-link">
                Signin
              </button>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            </li>
          )}
        </nav>
      </div>
      <RegisterModal />
      <Outlet />
    </div>
  );
}

export default NavBar;
