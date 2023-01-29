import React from "react";

export default function PackageCard({senderName, id, status}) {
  return (
    <div className="card">
      <div className="container">
        <h2>{senderName}</h2>
        <p className="status">{status}</p>
        <p>Parcel code: <span className="id">{id}</span></p>
      </div>
    </div>
  );
}
