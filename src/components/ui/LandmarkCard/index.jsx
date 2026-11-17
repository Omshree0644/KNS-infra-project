
import "./style.css";

function LandmarkCard({ name, distance }) {
  return (
    <div className="landmark-card">
      <h3>{name}</h3>
      <span>{distance}</span>
    </div>
  );
}

export default LandmarkCard;
