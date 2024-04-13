import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
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
      <h1>404 - Page Not Found</h1>
      <h2>The page you are looking for does not exist.</h2>
      <h2>You will be redirected to the homepage in {countdown} seconds...</h2>
    </div>
  );
}
