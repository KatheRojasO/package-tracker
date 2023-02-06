import React from "react";
import { useParams } from "react-router-dom";
import ParcelInfo from "../components/ParcelInfo";

export default function ParcelSection({ deliveries }) {
  const params = useParams();

  const parcel = deliveries.filter(
    (parcel) => parcel.parcel_id === params.parcel_id
  );

  // If the only job of ParcelSection.jsx is to load ParcelInfo.jsx then why this page exist? -1
  return (
    <div className="parcel">
      <ParcelInfo parcel={parcel[0]} />
    </div>
  );
}
