import React, { useState } from "react";

const SignUpPage = ({toggleForm}) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const handleSubmit = ( event ) => {
    event.preventDefault();

    if ( password != confirmPassword ){
      alert("Passwords don't match!")
      return;
    }
    //TODO:  submission logic

    console.log("Signup with:: ", { username, password })
  }

  return (
      <form className = "form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        
        <div className = "form-group">
          <label 
            className="form-label"
            htmlFor="new-username"
          >
            Username:
          </label>

          <input
            required
            autoComplete="username"
            className="form-input"
            placeholder="New Account Username"
            type="text" 
            id="username"
            value={ username }
            onChange={ (e) => setUsername( e.target.value ) } 
          />
        </div>
        
        <div className = "form-group">  
          <label 
            htmlFor="new-password"
            className="form-label"
          >
            Password:
          </label>

          <input 
            required
            autoComplete="new-password"
            className="form-input"
            placeholder="New Account Password"
            type="password" 
            id="password" 
            value = { password }
            onChange={ (e) => setPassword( e.target.value ) } 
          />

          <input 
            required
            autoComplete="new-password"
            className="form-input"
            placeholder="Confirm New Password"
            type="password" 
            id="confirmpassword" 
            value = { confirmPassword }
            onChange={ (e) => setConfirmPassword( e.target.value ) } 
          />

        </div>

        <div className = "form-group"> 
          <button 
            type="submit"
            className="form-button"
          >
            Sign Up
          </button>
        </div>

        <div className = "form-group"> 
          <p>Already have an account? </p>
          <button 
            type="button" 
            onClick={toggleForm}
          >
            Go to Login Page
          </button>
        </div>
      </form>
  );
};

export default SignUpPage;
