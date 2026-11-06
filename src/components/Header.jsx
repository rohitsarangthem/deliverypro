
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="delivery-header">
      <div className="delivery-header-container">

        {/* Logo */}
        <a href="#home" className="delivery-logo" onClick={closeMenu}>
          <span className="delivery-logo-icon">D</span>
          <span>Deliver<span className="delivery-logo-highlight">Pro</span></span>
        </a>

        {/* Navigation */}
        <nav className={`delivery-nav ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#coverage" onClick={closeMenu}>Coverage</a>
          <a href="#partners" onClick={closeMenu}>Our Partners</a>
          <a href="#contact" onClick={closeMenu} className="delivery-mobile-cta">
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="delivery-header-cta">
          Let's Partner <span>↗</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className={`delivery-menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;
