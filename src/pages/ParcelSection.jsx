import React from "react";
import { useParams } from "react-router-dom";
import ParcelInfo from "../components/ParcelInfo";
import InvalidPackage from "../components/InvalidPackage";

export default function ParcelSection({ deliveries }) {
  const params = useParams();

  const parcel = deliveries.find(
    (parcel) => parcel.parcel_id === params.parcel_id
  );

  if (parcel==null){
    return <InvalidPackage />
  }

  return (
    <div className="parcel">
      <ParcelInfo parcel={parcel} />
    </div>
  );
}
