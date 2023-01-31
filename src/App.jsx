import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import PackageSection from './pages/PackageSection';
import TrackingSection from './pages/TrackingSection';

export default function App() {
  
 

  return (
    <>
      <TrackingSection />
      <BrowserRouter>
        <Routes>
        <Route path="/parcel/:parcel_id" element={<PackageSection parcelId={"parcel_id"} />} />

        </Routes>
      </BrowserRouter>

      
    </>
  );
}



