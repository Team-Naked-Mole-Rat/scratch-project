import React, { useState } from "react";
import LoginPage from './signin/LoginPage.js'
import SignupPage from './signin/SignUpPage.js'

export default function SignInSelectPage () {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className = "main-content">
      <h1>Green Family / Plant world</h1>

      <div className="main-container">
        <div className="card">
          {isLogin ? (
            <LoginPage toggleForm ={toggleForm}/>
          ) : (
            <SignupPage toggleForm ={toggleForm}/>
          )}
        </div>
      </div>
    </div>
  );
};