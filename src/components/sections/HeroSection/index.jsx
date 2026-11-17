
import "./style.css";
import logo from "../../../assets/icons/logo.webp";
import familyImage from "../../../assets/images/family.png";
import Button from "../../ui/Button/button.jsx";
import InfoCard from "../../ui/InfoCard/infocard.jsx";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${familyImage})` }}
    >
      <div className="hero-content">
        <img
          src={logo}
          alt="KNS Infra Logo"
          className="hero-logo"
        />

        <h1 className="hero-title">KNS Sampada</h1>

        <p className="hero-tagline">
          Own your dream plot,{" "}
          <strong>Near Hejjala Toll</strong>, Mysuru Road.
        </p>

        <div className="hero-buttons">
          <Button variant="outline">
            ▤ View Brochure
          </Button>

          <Button variant="gold">
            ☎ Book Site Visit
          </Button>
        </div>
        </div>
       
<div className="property-info-cards">
  <InfoCard title="Configurations" value="Plots">
    <p className="card-link">View floor plans and sizes below</p>
  </InfoCard>

  <InfoCard title="Stage" value="Under Construction">
    <p className="card-link">Club House</p>
  </InfoCard>

  <InfoCard title="Possession" value="June 2030" />

  <InfoCard title="RERA Status" value="Registered">
    <button>View Certificate</button>
  </InfoCard>
</div>

      
    </section>
  );
}

export default Hero;
