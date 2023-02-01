import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import PackageSection from "./pages/PackageSection";
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
            element={<TrackingSection deliveries={deliveries} />}
          />
          <Route 
            path="/parcel/:parcel_id"
            element={<PackageSection deliveries={deliveries} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
