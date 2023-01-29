import React, { useEffect, useState } from "react";
import axios from 'axios';
import PackageCard from "../components/PackageCard";


export default function TrackingSection() {

  const [deliveries, setDeliveries] = useState([]);

  const fetchData = () => {
    return axios.get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840").then((response)=> setDeliveries(response.data))
  }

  useEffect(() => {
    fetchData();
  },[])

  const deliveredPackages = deliveries.filter(delivery => delivery.status === 'delivered').map(filteredDeliveries => (
      <PackageCard senderName={filteredDeliveries.sender} id={filteredDeliveries.parcel_id} status={filteredDeliveries.status} /> 
  ))

  return (
    <>
      {deliveredPackages}
    </>
  );
}
