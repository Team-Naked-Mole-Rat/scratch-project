import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './../../styles/css/about.css';


export default function NotFound() {
  const navigate = useNavigate();
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
    <div id="not-found-page" className = "main-content">
      <div className="homepage-container">
      <h1 className="fourOhfour">404: Page Not Found</h1>
     
      
      <h2 className="fourOhfourb"><span id="content1">The page you are looking for does not exist.</span><span id="content2">You will be redirected to the homepage in<span className = "fourOhfourc">{countdown} </span> seconds...</span></h2>
    </div>
    </div>
  );
}
