import React from "react";

export default function Header({setShowDelivered}) {

  return (
    <nav className="navbar">
      <div className="container">
        <button className="nav-btn" onClick={() => setShowDelivered(false)}>Receiving</button>
        <h1 className="company-name">InstaPacket</h1>
        <button className="nav-btn" onClick={() => setShowDelivered(true)}>Archive</button>
      </div>
    </nav>
  );
}
