import React, { useState } from 'react';

const LoginPage = ({toggleForm}) =>{
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO:  submission logic:

    console.log('Login with:: ', { username, password });
  }

    return (

      <form className = "form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label 
            className="form-label"
            htmlFor="username"
            >
              Username:
          </label>

          <input 
            required
            autoComplete="username"
            className="form-input"
            placeholder="Account Username"
            type="text" 
            id="username"
            value={ username }
            onChange={ (e) => setUsername( e.target.value ) } 
            />
        </div>

        <div className="form-group">
          <label 
            htmlFor="password"
            className="form-label"
            >
              Password:
          </label>

          <input 
            required
            autoComplete="current-password"
            className="form-input"
            placeholder="Account Password"
            type="password" 
            id="password" 
            value = { password }
            onChange={ (e) => setPassword( e.target.value ) } 
          />
        </div>

        <div className="form-group">
          <button 
            type="submit"
            className="form-button"
            >
              Login
          </button>
        </div> 

        <div className="form-group">      
          <p>Don't have an account?</p>
          <button 
            type="button" 
            onClick={toggleForm}
          >
            Go to Signup Page
          </button>
        </div>

      </form>

    )
}

export default LoginPage