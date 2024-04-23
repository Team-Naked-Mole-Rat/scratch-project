import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSignupMutation } from "../../features/api/http_registerSlice.js";
import { setCredentials } from "../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { closeModal } from '../../features/modals/modalsSlice.js'

const Signup = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signup, { isLoading }] = useSignupMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      console.log("Signup with:: ", { username, password });
      const res = await signup({ userInfo: { username, password } }).unwrap();

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
      <h2 className="register register-header">Sign Up</h2>

      <div className="register form-group ">
        <label className="register form-label" htmlFor="new-username">
          Username:
        </label>

        <input
          required
          autoComplete="username"
          className="register form-input"
          placeholder="New Account Username"
          type="text"
          id="new-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="register form-group">
        <label htmlFor="new-password" className="register form-label">
          Password:
        </label>

        <input
          required
          autoComplete="new-password"
          className="register form-input"
          placeholder="New Account Password"
          type="password"
          id="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="new-password-confirm" className="form-label"></label>
        <input
          required
          autoComplete="new-password"
          className="register form-input"
          placeholder="Confirm New Password"
          type="password"
          id="new-password-confirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="register form-group">
        <button type="submit" className="register form-button">
          Sign Up
        </button>
      </div>

      <div className="register form-group">
        <p>Already have an account? </p>
        <button
          className="register form-button"
          type="button"
          onClick={toggleForm}
        >
          Go to Login Page
        </button>
      </div>
    </form>
  );
};

export default Signup;
