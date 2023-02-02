import { Link } from "react-router-dom";
import nextIcon from "../assets/icons/next-icon.png";

export default function PackageCard({ parcel }) {
  const { status, parcel_id, sender } = parcel;

  return (
    <Link to={`parcel/${parcel_id}`}>
      <div className="card">
        <div className="container">
          <div className="icon-container">
            <h2>{sender}</h2>
            <img src={nextIcon} alt="next-icon" />
          </div>
          <p className="status">{status}</p>
          <p>
            Parcel code: <span className="id">{parcel_id}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
