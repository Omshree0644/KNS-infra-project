import "./style.css";
import Container from "../../ui/Container";
import AmenityCard from "../../ui/AmenityCard";

import amenity1 from "../../../assets/images/amenity1.jpg";
import amenity2 from "../../../assets/images/amenity2.jpg";
import amenity3 from "../../../assets/images/amenity3.jpg";
import amenity4 from "../../../assets/images/amenity4.jpg";
import amenity5 from "../../../assets/images/amenity5.jpg";
import amenity6 from "../../../assets/images/amenity6.jpg";
import amenity7 from "../../../assets/images/amenity7.jpg";
import amenity8 from "../../../assets/images/amenity8.jpg";
import amenity9 from "../../../assets/images/amenity9.jpg";
import amenity10 from "../../../assets/images/amenity10.jpg";
import amenity11 from "../../../assets/images/amenity11.jpg";
import amenity12 from "../../../assets/images/amenity12.jpg";

function Amenities() {
  const amenities = [
    { image: amenity1, title: "Swimming Pool" },
    { image: amenity2, title: "Club House" },
    { image: amenity3, title: "Outdoor Gym" },
    { image: amenity4, title: "Kids Play Area" },
    { image: amenity5, title: "Yoga Pavilion" },
    { image: amenity6, title: "Multipurpose Hall" },
    { image: amenity7, title: "Multipurpose Lawn" },
    { image: amenity8, title: "EV Charging Station" },
    { image: amenity9, title: "Cricket Net" },
    { image: amenity10, title: "Volleyball Ground" },
    { image: amenity11, title: "Senior Citizen Area" },
    { image: amenity12, title: "Skating Ring" },
  ];

  return (
    <section className="amenities-section" id="amenities">
      <Container>
        <div className="amenities-heading">
          <h2>Amenities & Features</h2>
          <p>
            Discover the premium amenities and features that make this project special.
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} {...amenity} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Amenities;