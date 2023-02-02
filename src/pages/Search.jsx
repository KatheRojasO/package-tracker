import React from "react";
import img from "../assets/images/hero-mobile.jpg";
import searchIcon from "../assets/icons/search-button.png";

export default function Login() {
  return (
    <div className="login">
      <img className="hero-img" src={img} alt="man-with-parcels" />
      <div className="container">
        <div className="login-card">
          <h2>Track your packages</h2>
          <p>Enter the telephone number you registered for the deliver </p>
          <div className="input-container">
            <input className="input-field" placeholder="+46 000000000" type="text" />
            <img className="search-icon" src={searchIcon} alt="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
