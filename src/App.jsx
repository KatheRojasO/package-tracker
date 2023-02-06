import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import Search from "./pages/Search";
import ParcelSection from "./pages/ParcelSection";
import TrackingSection from "./pages/TrackingSection";

export default function App() {
  // why its called deliveries? is not parcels a easier name?
  const [deliveries, setDeliveries] = useState([]);

  // dont use const to create functions -1
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

  // why the empty diamond?, return a div with classname app
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search deliveries={deliveries} />} />
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
