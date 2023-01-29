import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./css/styles.css";
import Header from './components/Header';
import TrackingSection from './pages/TrackingSection';

export default function App() {
  const [deliveries, setDeliveries] = useState([]);

  const fetchData = () => {
    return axios.get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840").then((response)=> setDeliveries(response.data))
  }

  useEffect(() => {
    fetchData();
  },[])

  const deliveredPackages = deliveries.filter(delivery => delivery.status === 'delivered').map(filteredDeliveries => (
    <li>
      {filteredDeliveries.sender}
      {filteredDeliveries.eta}
    </li>
  ))

  

  return (
    <main>
      <Header />
      <TrackingSection />

      <h1>User List</h1>
      <ul>
        {deliveredPackages}
      </ul>
    </main>
  );
}



