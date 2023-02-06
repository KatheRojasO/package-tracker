import React, { useState } from "react";
import Header from "../components/Header";
import ParcelCard from "../components/ParcelCard";

export default function TrackingSection({ deliveries }) {
  const [showDelivered, setShowDelivered] = useState(false);

  /**
   * this is too complex, we shown in the todo list a simpler way to handle this
   * using 2 derived states -1
   *  */
  // Properties
  const delivered = deliveries.filter((item) => item.status === "delivered");
  const pending = deliveries.filter((item) => item.status !== "delivered");

  // Components
  const DeliveredItems = delivered.map((item) => <ParcelCard parcel={item} />);
  const PendingItems = pending.map((item) => <ParcelCard parcel={item} />);

  return (
    <div className="tracking-section">
      <Header setShowDelivered={setShowDelivered} />
      {PendingItems}
      {showDelivered && DeliveredItems}
    </div>
  );
}
