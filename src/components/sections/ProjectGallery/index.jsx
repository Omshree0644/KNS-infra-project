
import "./style.css";
import Container from "../../ui/Container";
import ImageCard from "../../ui/ImageCard";

import gallery1 from "../../../assets/images/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery6.jpg";
import gallery7 from "../../../assets/images/gallery7.jpg";
import gallery8 from "../../../assets/images/gallery8.jpg";
import gallery9 from "../../../assets/images/gallery9.jpg";
import gallery10 from "../../../assets/images/gallery10.jpg";
import gallery11 from "../../../assets/images/gallery11.jpg";
import gallery12 from "../../../assets/images/gallery12.jpg";

function ProjectGallery() {
 const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

  return (
    <section className="project-gallery" id="gallery">
      <Container>
        <div className="gallery-heading">
          <span>OUR GALLERY</span>
          <h2>Nature Around KNS Infra</h2>
          <p>
            Experience peaceful surroundings and beautiful green spaces.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              alt={`Nature view ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectGallery;
