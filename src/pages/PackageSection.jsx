import React from "react";
import { useParams } from "react-router-dom";
import PackageInfo from "../components/PackageInfo";

export default function PackageSection({ deliveries }) { 

  const params = useParams();

  const parcel = deliveries.filter(
    (parcel) => parcel.parcel_id === params.parcel_id
  );

  return (
    <div className="parcel">
      <PackageInfo parcel= {parcel[0]} />
    </div>
  );
}
