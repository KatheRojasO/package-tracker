import React from "react";
import { useNavigate } from "react-router-dom";
import { getFullDate, getShortTime } from "../service/date";
import Map from "./Map";
import locationIcon from "../assets/icons/location-icon.png";
import goBackIcon from "../assets/icons/go-back-icon.png";
import img from "../assets/images/parcel.png";

// Over 50 lines long
export default function ParcelInfo({ parcel }) {
  // this part of the destructuring is unavoidable so is ok
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

  const date = getFullDate(eta);
  const time = getShortTime(eta);

  // this can be refactored a lot
  return (
    <div className="parcel-info">
      <div className="container">
        <div className="header">
          <img
            src={goBackIcon}
            className="back-icon"
            alt="go-back-icon"
            onClick={() => navigate(-1)}
          />
          <h2 className="company-name">InstaPacket</h2>
        </div>
        <div className="card-container">
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
            <span>
              Arrival: {date} {time}
            </span>
            <span>
              Notes: <b>{notes}</b>
            </span>
          </div>
        </div>
        <img src={img} className="bg-img" alt="bg-img" />
      </div>
    </div>
  );
}
