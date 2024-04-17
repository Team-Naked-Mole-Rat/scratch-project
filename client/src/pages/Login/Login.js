import React, { useState } from "react";
import { useLoginMutation } from "../../features/api/registerApiSlice";
import { setCredentials } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      console.log("Error logging in");
      console.error(err?.data?.message || err.error);
    }
    // TODO:  submission logic:

    console.log("Login with:: ", { username, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="form-group">
        <label className="form-label" htmlFor="username">
          Username:
        </label>

        <input
          required
          autoComplete="username"
          className="form-input"
          placeholder="Account Username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>

        <input
          required
          autoComplete="current-password"
          className="form-input"
          placeholder="Account Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="form-button">
          Login
        </button>
      </div>

      <div className="form-group">
        <p>Don't have an account?</p>
        <button type="button" onClick={toggleForm}>
          Go to Signup Page
        </button>
      </div>
    </form>
  );
};

export default Login;
