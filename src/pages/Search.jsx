import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/hero-mobile.jpg";
import searchIcon from "../assets/icons/search-button.png";

export default function Search({ deliveries }) {
  const [phoneInput, setPhoneInput] = useState("");
  const navigate = useNavigate();

  let inputHandler = (e) => {
    setPhoneInput(e.target.value);
  };

  const validatePhone = () => {
    const userPhone = deliveries[0].user_phone

    if (phoneInput !== userPhone) {
      alert("No parcels");
    } else {
      navigate("/parcels");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <img className="hero-img" src={img} alt="man-with-parcels" />
        <div className="card">
          <div className="info-card">
            <h2>Track your packages</h2>
            <p>Enter the telephone number you registered for the deliver </p>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                value={phoneInput}
                onChange={inputHandler}
              />
              <img
                className="search-icon"
                onClick={validatePhone}
                src={searchIcon}
                alt="search-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
