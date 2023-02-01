import React from "react";
import Map from "./Map";

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
  } = parcel;

 

  // const map = () => {
  //   if (!isLoaded) return <Map location={location_id} latitude={location_coordinate_latitude} longitude={location_coordinate_longitude}/>;
  // }

  return (
    <div>
      <div>
        <h2>{sender}</h2>
        <span> Parcel code: {parcel_id}</span>
      </div>
      <span>{status}</span>
      <div>
        icon
        <span>{location_name}</span>
      </div>
      
        <Map
          location={location_id}
          latitude={location_coordinate_latitude}
          longitude={location_coordinate_longitude}
        />
      
    </div>
  );
}
