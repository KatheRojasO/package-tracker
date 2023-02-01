import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export default function Map({ location, latitude, longitude }) {
  const center = {
    lat: parseInt(latitude),
    lng: parseInt(longitude),
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  );
}
