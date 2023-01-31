import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PackageCard from "../components/PackageCard";

export default function TrackingSection() {
  const [deliveries, setDeliveries] = useState([]);
  const [showDelivered, setShowDelivered] = useState(false);

  const fetchData = () => {
    return axios
      .get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => setDeliveries(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
