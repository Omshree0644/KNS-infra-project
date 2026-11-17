
import "./Projects.css";
import Container from "../../components/ui/Container";
import ProjectCard from "../../components/ui/ProjectCard";
import DashboardInfoCard from "../../components/ui/DashboardInfoCard";
import knsLogo from "../../assets/images/kns-logo.png";
import unnatiImage from "../../assets/images/KNS Unnati Phase 5.jpg";
import sampadaImage from "../../assets/images/KNS Sampada.jpg";
import anantaImage from "../../assets/images/KNS Ananta.jpg";
import samoohaImage from "../../assets/images/KNS Samooha.jpg";

function Projects() {
  const projects = [
    {
      title: "KNS Unnati Phase 5",
      location: "Near Hejjala Toll, Mysuru Road",
      price: "₹ 80 Lack",
      status: "RERA Approved",
     image: unnatiImage,
    },
    {
      title: "KNS Sampada",
      location: "Near Hejjala Toll, Mysuru Road",
      price: "₹ 80 Lack",
      status: "RERA Approved",
      image: sampadaImage,
    },
    {
      title: "KNS Ananta",
      location: "Near Hejjala Toll, Mysuru Road",
      price: "₹ 80 Lack",
      status: "RERA Approved",
      image: anantaImage,
    },
    {
      title: "KNS Samooha",
      location: "Near Hejjala Toll, Mysuru Road",
      price: "₹ 80 Lack",
      status: "RERA Approved",
     image: samoohaImage,
    },
  ];

 return (
  <div className="projects-page">
    <Container>
      <header className="dashboard-header">
        <img src={knsLogo} alt="KNS Infra Logo" />
        </header>

      <div className="dashboard-grid">
        <div className="dashboard-column">
          <DashboardInfoCard
            title="Hi Arun,"
            description="Please find the shortlisted project details as discussed."
            variant="welcome"
          />

          <ProjectCard {...projects[1]} />
          <ProjectCard {...projects[2]} />
        </div>

        <div className="dashboard-column">
          <ProjectCard {...projects[0]} />
          <ProjectCard {...projects[3]} />

          <DashboardInfoCard
            title="Need More Info?"
            description="Our property experts are here to help you find the perfect plot. Get in touch for personalized assistance."
            variant="contact"
          >
            <a href="https://wa.me/918105632565">Book Site Visit</a>
            <a href="tel:+918105632565">Call Now</a>
          </DashboardInfoCard>
        </div>
      </div>
    </Container>
  </div>
);
}

export default Projects;
