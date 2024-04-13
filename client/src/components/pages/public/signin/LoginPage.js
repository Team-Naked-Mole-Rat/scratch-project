import React, { useState } from 'react';

const LoginPage = ({toggleForm}) =>{

    return (
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
    )
}

export default LoginPage