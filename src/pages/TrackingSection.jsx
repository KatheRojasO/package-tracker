import React, { useState } from "react";
import Header from "../components/Header";
import PackageCard from "../components/PackageCard";

export default function TrackingSection({deliveries}) {
  
  const [showDelivered, setShowDelivered] = useState(false);

  const parcelCards = () => {
    let filteredParcels = [];
    if (showDelivered) {
      filteredParcels = deliveries.filter(
        (delivery) => delivery.status === "delivered"
      );
    } else {
      filteredParcels = deliveries.filter(
        (delivery) => delivery.status !== "delivered"
      );
    }
    return filteredParcels.map((filteredParcel) => (
        <PackageCard parcel={filteredParcel} /> 
    ));
  };

  return (
    <>
      <Header setShowDelivered={setShowDelivered} />
      {parcelCards()}
    </>
  );
}
