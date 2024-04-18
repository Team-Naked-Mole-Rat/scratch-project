import React, { useState } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="main-content">
      {/* <h1>Green Family</h1> */}

      <div className="register main-container">
        <div className="register card">
          {isLogin ? (
            <Login toggleForm={toggleForm} />
          ) : (
            <Signup toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </div>
  );
}
