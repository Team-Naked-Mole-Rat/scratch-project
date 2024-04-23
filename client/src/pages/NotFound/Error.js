import React, { useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import './../../styles/css/about.css';

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  const [countdown, setCountdown] = useState(5);  

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {  
          navigate('/');  
          return 0;  
        }
        return prevCountdown - 1;  
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [navigate]);

  return (
    <div id="error-page" className = "main-content">
      <h1>Oops!</h1>
      <h2>Sorry, an unexpected error has occurred...</h2>
      <h2>You will be redirected to the homepage in {countdown} seconds...</h2>
      <p>
        <i>Error: {error?.message || "Unknown error"}</i>
      </p>
    </div>
  );
}

