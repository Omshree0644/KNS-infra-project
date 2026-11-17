
import "./style.css";
import experienceImage from "../../../assets/images/experience.png";

function ExperienceSection() {
  return (
    <div className="experience-section">

      <div className="experience-content">
        <h1>Experience the Project</h1>

        <p>
          Take a virtual walkthrough and explore the luxury amenities
          and beautiful architecture.
        </p>
      </div>

      <div
        className="experience-video"
        style={{ backgroundImage: `url(${experienceImage})` }}
      >
        <button className="play-button">▶</button>
      </div>

    </div>
  );
}

export default ExperienceSection;
