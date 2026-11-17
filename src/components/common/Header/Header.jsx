
import { useState, useEffect,  } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
 

  const links = [
    ["overview", "Overview"],
    ["experience", "Experience"],
    ["units", "Units"],
    ["pricing", "Pricing"],
    ["gallery", "Gallery"],
    ["amenities", "Amenities"],
    ["location", "Location"],
    
  ];

 useEffect(() => {
  const sectionIds = [
    ...links.map(([id]) => id),
    "contact",
  ];

  const updateActiveSection = () => {
  let currentSection = "overview";
  const scrollPosition = window.innerHeight * 0.35;

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);

    if (section && section.getBoundingClientRect().top <= scrollPosition) {
      currentSection = id;
    }
  });

  // Detect when the visitor reaches the bottom of the page
  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5;

  if (isAtBottom) {
    currentSection = "contact";
  }

  setActiveLink(currentSection);

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}#${currentSection}`
  );
};

  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
  };
}, []);

  return (
    <header className="project-header">
      <button
        className="back-btn"
      onClick={() => window.location.href = "/"}
      >
        ‹ Back
      </button>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`/project-details#${id}`}
            className={activeLink === id ? "active" : ""}
            onClick={() => {
              setActiveLink(id);
              setMenuOpen(false);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        className="call-btn"
        href="#contact"
        onClick={() => {
          setActiveLink("contact");
        }}
      >
        ☎ Call Now
      </a>
    </header>
  );
}

export default Header;
