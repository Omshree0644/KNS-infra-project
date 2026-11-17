import Button from "../Button";
import "./style.css";

function ProjectCard({ image, title, location, price, status }) {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="project-card-overlay">

        <span className="project-status">
          ✦ {status}
        </span>

        <div className="project-card-content">
          <h3>{title}</h3>

          <div className="project-card-meta">
            <span>📍 {location}</span>
            <span>▦ Plots</span>
          </div>

          <div className="project-card-bottom">
            <div className="project-card-price">
              <h4>{price}</h4>
              <small>Starting from</small>
            </div>

            <Button
              href="/project-details"
              className="view-details-btn"
            >
              View Details
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;