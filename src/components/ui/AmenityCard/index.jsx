import "./style.css";

function AmenityCard({ image, title }) {
  return (
    <div className="amenity-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default AmenityCard;