import React, { useState } from "react";

const SignUpPage = ({toggleForm}) => {

  return (
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
  );
};

export default SignUpPage;
