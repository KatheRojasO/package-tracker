import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import ParcelSection from "./pages/ParcelSection";
import TrackingSection from "./pages/TrackingSection";

export default function App() {
  const [deliveries, setDeliveries] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => {
        localStorage.setItem("userData", JSON.stringify(response.data));
        setDeliveries(response.data);
      })
      .catch(() => {
        let cachedData = localStorage.getItem("userData");
        setDeliveries(JSON.parse(cachedData));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<TrackingSection deliveries={deliveries} />}
          />
          <Route
            path="/parcels/:parcel_id"
            element={<ParcelSection deliveries={deliveries} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
