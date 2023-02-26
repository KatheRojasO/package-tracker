import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/parcel.png"

export default function InvalidPackage() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="container">
        <img src={img} className="error-img" alt="package"/>
        <h2>Upps! It seems like this package doesn't exist</h2>
        <button className="error-page-btn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
}
