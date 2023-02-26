import React, { useState } from "react";
import Header from "../components/Header";
import ParcelCard from "../components/ParcelCard";

export default function TrackingSection({ deliveries }) {
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
      <ParcelCard parcel={filteredParcel} />
    ));
  };

  return (
    <div className="tracking-section">
      <Header setShowDelivered={setShowDelivered} />
      <div className="tracking-container">
        <h1>Welcome!</h1>
        {parcelCards()}
      </div>
    </div>
  );
}
