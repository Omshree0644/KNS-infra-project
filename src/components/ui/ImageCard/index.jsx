
import "./style.css";

function ImageCard({ image, alt = "Gallery image" }) {
  return (
    <div className="ui-image-card">
      <img src={image} alt={alt} />
    </div>
  );
}

export default ImageCard;
