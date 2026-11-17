
import "./style.css";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import LandmarkCard from "../../ui/LandmarkCard";

function LocationSection() {
  const landmarks = [
    { name: "The Dalai Lama Institute", distance: "2.8 km" },
    { name: "TRUST MED Multispeciality Hospital", distance: "2.8 km" },
    {
      name: "Mahatma Gandhi Professional College of Nursing",
      distance: "2.8 km",
    },
    { name: "Featherlite Office System Pvt. Ltd.", distance: "2.8 km" },
  ];

  return (
    <section className="location-section" id="location">
      <Container>
        <SectionTitle
          subtitle="LOCATION"
          title="Location Advantages"
          description="Strategically located with excellent connectivity to key destinations."
        />

        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps?q=12.9599434,77.5342264&z=15&output=embed"
              title="KNS Infra Project Location"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="nearby-landmarks">
            <h2>Nearby Landmarks</h2>

            <div className="landmark-list">
              {landmarks.map((landmark, index) => (
                <LandmarkCard
                  key={index}
                  name={landmark.name}
                  distance={landmark.distance}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LocationSection;
