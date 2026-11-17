import "./style.css";
import InfoCard from "../../ui/InfoCard/infocard";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ProjectOverview() {
  return (
    <section className="project-overview">
      <div className="overview-content">
        <h2>Project Overview</h2>
        <p>
          Discover the key highlights of this premium residential development.
        </p>
      </div>
      <div className="overview-cards">
        <InfoCard
          variant="overview"
          icon={<BusinessIcon />}
          value="KNS Infra"
          title="Builder"
        />

        <InfoCard
          variant="overview"
          icon={<LocationOnIcon />}
          value="Near Hejjala Toll"
          title="Location"
        />

        <InfoCard
          variant="overview"
          icon={<BusinessIcon />}
          value="11.06 Acres"
          title="Land Parcel"
        />

        <InfoCard
          variant="overview"
          icon={<BusinessIcon />}
          value="193"
          title="Units"
        />

        <InfoCard
          variant="overview"
          icon={<BusinessIcon />}
          value="45%"
          title="Open Space"
        />
      </div>

    </section>
  );
}

export default ProjectOverview;
