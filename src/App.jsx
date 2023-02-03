import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import Search from "./pages/Search";
import ParcelSection from "./pages/ParcelSection";
import TrackingSection from "./pages/TrackingSection";

export default function App() {
  const [deliveries, setDeliveries] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => setDeliveries(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={<Search phone={deliveries[0].user_phone} />}
          />
          <Route
            path="/parcels"
            element={<TrackingSection deliveries={deliveries} />}
          />
          <Route 
            path="/parcels/:parcel_id"
            element={<ParcelSection deliveries={deliveries} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
