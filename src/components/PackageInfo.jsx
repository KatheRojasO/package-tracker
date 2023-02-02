import React from "react";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import locationIcon from "../assets/icons/location-icon.png";
import goBackIcon from "../assets/icons/go-back-icon.png";
import img from "../assets/images/parcel.png"

export default function PackageInfo({ parcel }) {
  const {
    status,
    eta,
    parcel_id,
    sender,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    notes,
  } = parcel;

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <img src={goBackIcon} className="back-icon" alt="go-back-icon" onClick={() => navigate(-1)} />
        <h2 className="company-name">InstaPacket</h2>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>{sender}</h2>
          <span>
            Parcel code: <b>{parcel_id}</b>
          </span>
        </div>
        <span className="status">{status}</span>
        <div className="location">
          <img
            src={locationIcon}
            className="location-icon"
            alt="location-icon"
          />
          <span className="location-name">{location_name}</span>
        </div>
        <Map
          latitude={location_coordinate_latitude}
          longitude={location_coordinate_longitude}
        />
        <div className="additional-info">
          <span>Arrival: <b>{eta}</b></span>
          <span>Notes: <b>{notes}</b></span>
        </div>
      </div>
      <img src={img} className="bg-img" alt="bg-img"/>
    </div>
  );
}
