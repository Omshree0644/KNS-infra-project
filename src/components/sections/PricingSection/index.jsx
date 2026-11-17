
import "./style.css";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <Container>
        <div className="pricing-card">
          <div className="pricing-content">
            <span className="pricing-label">PRICING</span>
            <h2>Starting Price</h2>
            <p>
              Get the best pricing and availability for your dream project.
            </p>
          </div>

          <Button href="#contact" className="pricing-button">
            Request Pricing
            <span className="pricing-icon">↗</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
