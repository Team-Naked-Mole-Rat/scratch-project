import React, { useState } from "react";

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  //to do: fix this
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <h1>Green Family / Plant world</h1>
      <div className="main-container">
        <div className="card">
          {isLogin ? (
            <form>
              <h2>Login</h2>
              <div className="form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Login</button>
              <p>Don't have an account?</p>
              <button type="button" onClick={toggleForm}>
                Sign Up
              </button>
            </form>
          ) : (
            <form>
              <h2>Sign Up</h2>
              <div className="form">
                <label htmlFor="new-username">Username</label>
                <input type="text" id="new-username" name="new-username" />
                <label htmlFor="new-password">Password</label>
                <input type="password" id="new-password" name="new-password" />
              </div>
              <button type="submit">Sign Up</button>
              <p>Already have an account? </p>
              <button type="button" onClick={toggleForm}>
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
