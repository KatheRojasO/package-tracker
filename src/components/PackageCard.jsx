import React, { useState } from "react";
import { Link } from "react-router-dom";
import PackageSection from "../pages/PackageSection";

export default function PackageCard({ parcel }) {
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

  return (
      
    <Link to={`parcel/${parcel_id}`}>
      <div className="card">
        <div className="container">
          <h2>{sender}</h2>
          <p className="status">{status}</p>
          <p>
            Parcel code: <span className="id">{parcel_id}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
