import { Link } from "react-router-dom";
import nextIcon from "../assets/icons/next-icon.png";

export default function ParcelCard({ parcel }) {
  const { status, parcel_id, sender } = parcel;

  return (
    <Link to={`/parcels/${parcel_id}`}>
      <div className="track-container">
        <div className="card">
          <div className="icon-container">
            <h2>{sender}</h2>
            <img src={nextIcon} alt="next-icon" />
          </div>
          <span className="status">{status}</span><br></br>
          <span> Parcel code: <b>{parcel_id}</b> </span>
        </div>
      </div>
    </Link>
  );
}
