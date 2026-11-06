
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Our Services", link: "#services" },
    { name: "Why Choose Us", link: "#why-choose-us" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  const services = [
    "Same-Day Delivery",
    "Express Delivery",
    "Scheduled Delivery",
    "Business Logistics",
    "Last-Mile Delivery",
  ];

  return (
    <footer className="delivery-footer">
      <div className="delivery-footer-container">

        <div className="delivery-footer-main">

          {/* Brand Column */}
          <div className="delivery-footer-brand">
            <a href="#home" className="delivery-footer-logo">
              <span className="material-symbols-outlined">
                local_shipping
              </span>
              <span>Delivery<span>Pro</span></span>
            </a>

            <p>
              Making every delivery simple, fast, and reliable.
              Your trusted partner for smarter delivery solutions
              and seamless logistics.
            </p>

            {/* Social Icons */}
            <div className="delivery-footer-socials">
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="delivery-footer-column">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="delivery-footer-column">
            <h3>Our Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="delivery-footer-column delivery-footer-contact">
            <h3>Get In Touch</h3>

            <div className="delivery-footer-contact-item">
              <FaMapMarkerAlt />
              <p>Your Business Address</p>
            </div>

            <div className="delivery-footer-contact-item">
              <FaPhoneAlt />
              <a href="tel:+18001234567">
                +1 (800) 123-4567
              </a>
            </div>

            <div className="delivery-footer-contact-item">
              <FaEnvelope />
              <a href="mailto:hello@deliverypro.com">
                hello@deliverypro.com
              </a>
            </div>

            <div className="delivery-footer-contact-item">
              <FaClock />
              <p>Mon – Sat: 9 AM – 6 PM</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="delivery-footer-bottom">
          <p>
            © {currentYear} DeliveryPro. All Rights Reserved.
          </p>

          <div className="delivery-footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
