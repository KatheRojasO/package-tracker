import { Link } from "react-router-dom";

export default function PackageCard({ parcel }) {
  const { status, parcel_id, sender } = parcel;

  return (
    <Link to={`parcel/${parcel_id}`}>
      <div className="card">
        <div className="container">
          <h2>{sender}</h2>
          <p className="status">{status}</p>
          <p>
            Parcel code: <span className="id">{parcel_id}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
