
import "./About.css";

function About() {
  return (
    <section className="delivery-about" id="about">
      <div className="delivery-about-container">

        {/* Left Image */}
        <div className="delivery-about-visual">

          <div className="delivery-about-image-wrapper">
            <img
              src="https://images.openai.com/static-rsc-4/GGdhy1S5ys-G7G7iMk9fph12BJcYQDn9l_NYLAS7CX5BMllRqTXPJCXYuJv8CUHd4LUpNdTqCpD2AUOFbR9MRicWagY6bDzKSyJGLpFexXRcmhrEfEETqX5uBgGe7JX0SwfxHtBIO4YZSiYFyxj1HOzvYh1HXEji8LoQWj-cLgg?purpose=inline"
              alt="Professional delivery team managing packages"
              className="delivery-about-image"
            />
          </div>

          {/* Experience Card */}
          <div className="delivery-about-experience">
            <span className="delivery-about-experience-number">
              10+
            </span>
            <span className="delivery-about-experience-text">
              Years of
              <br />
              Excellence
            </span>
          </div>

          {/* Decorative Circle */}
          <div className="delivery-about-decoration"></div>

        </div>

        {/* Right Content */}
        <div className="delivery-about-content">

          <span className="delivery-about-subtitle">
            ABOUT OUR COMPANY
          </span>

          <h2>
            Moving Your Business
            <span> Forward,</span>
            One Delivery at a Time.
          </h2>

          <p className="delivery-about-description">
            We are a dedicated delivery and logistics company
            committed to making deliveries faster, safer, and
            more reliable. Our goal is to connect businesses
            and customers through dependable delivery solutions.
          </p>

          <p className="delivery-about-description">
            With a customer-first approach, experienced delivery
            professionals, and efficient operations, we make
            every delivery experience simple and stress-free.
          </p>

          {/* Features */}
          <div className="delivery-about-features">

            <div className="delivery-about-feature">
              <span className="delivery-about-check">✓</span>
              <span>Reliable Delivery Network</span>
            </div>

            <div className="delivery-about-feature">
              <span className="delivery-about-check">✓</span>
              <span>Professional Delivery Team</span>
            </div>

            <div className="delivery-about-feature">
              <span className="delivery-about-check">✓</span>
              <span>Fast & Secure Services</span>
            </div>

            <div className="delivery-about-feature">
              <span className="delivery-about-check">✓</span>
              <span>Customer-Focused Solutions</span>
            </div>

          </div>

          {/* Button */}
          <a href="#services" className="delivery-about-button">
            Discover Our Services <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;
