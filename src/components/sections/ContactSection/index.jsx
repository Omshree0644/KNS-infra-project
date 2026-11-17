import "./style.css";
import Container from "../../ui/Container";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="contact-card">
          <h2>Still Have a Question?</h2>

          <p>
            Drop a message — our sales team replies within 24 hrs.
          </p>

          <div className="contact-buttons">
            <a href="tel:+918105632565" className="contact-call">
                <FaPhoneAlt size={14} />
                +91 8105632565
                </a>

          <a
            href="https://wa.me/918105632565"
            className="contact-whatsapp"
            target="_blank"
            rel="noreferrer"
            >
            <FaWhatsapp size={20} />
            Request Live Inventory
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;