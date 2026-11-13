import { useState } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("overview");

  return (
    <header className="project-header">

      <button
        className="back-btn"
        onClick={() => window.history.back()}
      >
        ‹ Back
      </button>

      <nav className="header-nav">
        <a href="/#overview"
          className={activeLink === "overview" ? "active" : ""}
          onClick={() => setActiveLink("overview")}>
          Overview
        </a>

        <a href="/#experience"
          className={activeLink === "experience" ? "active" : ""}
          onClick={() => setActiveLink("experience")}>
          Experience
        </a>

        <a href="/#units"
          className={activeLink === "units" ? "active" : ""}
          onClick={() => setActiveLink("units")}>
          Units
        </a>

        <a href="/#pricing"
          className={activeLink === "pricing" ? "active" : ""}
          onClick={() => setActiveLink("pricing")}>
          Pricing
        </a>

        <a href="/#gallery"
          className={activeLink === "gallery" ? "active" : ""}
          onClick={() => setActiveLink("gallery")}>
          Gallery
        </a>

        <a href="/#amenities"
          className={activeLink === "amenities" ? "active" : ""}
          onClick={() => setActiveLink("amenities")}>
          Amenities
        </a>

        <a href="/#location"
          className={activeLink === "location" ? "active" : ""}
          onClick={() => setActiveLink("location")}>
          Location
        </a>

       
      </nav>

      <a className="call-btn" href="tel:+917625065629">
        ☎ Call Now
      </a>

    </header>
  );
}

export default Header;