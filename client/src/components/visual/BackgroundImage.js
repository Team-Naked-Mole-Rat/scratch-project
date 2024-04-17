import React from "react";
import "../../styles/css/public_BackgroundImage.css";
import backgroundImage from "../../assets/images/background.jpg";

export default function BackgroundImage() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="background-image"
    ></div>
  );
}
