import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../../features/api/http_registerSlice.js";
import { setCredentials } from "../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from '../../features/modals/modalsSlice.js'

const Login = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Login with:: ", { username, password });
      const res = await login({userInfo: { username, password }}).unwrap();
      
      dispatch(setCredentials({ ...res }));
      dispatch(closeModal({ modalId: 'loginSignupModal' }));
      navigate("/plants");

    } catch (err) {
      console.log("Error logging in:", err);
      console.error("Detailed error: ",err?.data?.message || err.error|| "No error message provided.");
    }

  };

  return (
    <form className="register form" onSubmit={handleSubmit}>
      <h2 className="register register-header">Login</h2>

      <div className="register form-group">
        <label className="register form-label" htmlFor="username">
          Username:
        </label>

        <input
          required
          autoComplete="username"
          className="register form-input"
          placeholder="Account Username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="register form-group">
        <label htmlFor="password" className="register form-label">
          Password:
        </label>

        <input
          required
          autoComplete="current-password"
          className="register form-input"
          placeholder="Account Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="register form-group">
        <button  className="register form-button" type="submit">
          Login
        </button>
      </div>

      <div className="register form-group">
        <p>Don't have an account?</p>
        <button className="register form-button" type="button" onClick={toggleForm}>
          Go to Signup Page
        </button>
      </div>
    </form>
  );
};

export default Login;
