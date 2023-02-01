import React from "react";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import locationIcon from "../assets/icons/location-icon.png";
import goBackIcon from "../assets/icons/go-back-icon.png";

export default function PackageInfo({ parcel }) {
  const {
    status,
    eta,
    parcel_id,
    sender,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    notes,
  } = parcel;

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="header">
        <img src={goBackIcon} className="back-icon" alt="go-back-icon" onClick={() => navigate(-1)} />
        <h1>{sender}</h1>
      </div>
      <div className="container">
        <div className="card-header">
          <h2>{sender}</h2>
          <span>
            Parcel code: <span className="id">{parcel_id}</span>
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
          location={location_id}
          latitude={location_coordinate_latitude}
          longitude={location_coordinate_longitude}
        />
        <div className="additional-info">
          <span>
            Arrival: <span className="eta">{eta}</span>
          </span>
          <span>
            Notes: <span className="notes">{notes}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
