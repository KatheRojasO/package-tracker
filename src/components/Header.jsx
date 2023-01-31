import React from "react";

export default function Header({setShowDelivered}) {

  return (
    <nav>
      <div className="container">
        <button className="nav-btn" onClick={() => setShowDelivered(false)}>Receiving</button>
        <button className="nav-btn" onClick={() => setShowDelivered(true)}>Archive</button>
      </div>
    </nav>
  );
}
