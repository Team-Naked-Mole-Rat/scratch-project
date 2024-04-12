import './../styles/LoginPage.css';
import React, { useState } from 'react';
import LoginPage from './public/LoginPage.js';
import { Routes, Route } from 'react-router-dom';
import navBarLinks from './navigation/navBarLinks.js';

const App = () => {
  return (
    <div>
     <navBarLinks /> 
      <Routes>
        {/* <Route path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route> */}

        <Route path="/login" component={<LoginPage/>}/>
         
    
        
      </Routes>
    </div>
  );
};

{/* function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
} */}

export default App;
