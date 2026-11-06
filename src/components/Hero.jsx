
import "./Hero.css";

function Hero() {
  return (
    <section className="delivery-hero" id="home">
      <div className="delivery-hero-container">

        {/* Left Content */}
        <div className="delivery-hero-content">

          <div className="delivery-hero-tag">
            <span className="delivery-hero-dot"></span>
            Reliable Delivery Solutions
          </div>

          <h1>
            Delivering More Than
            <span> Packages.</span>
            <br />
            Delivering <span>Trust.</span>
          </h1>

          <p>
            Your trusted delivery partner for fast, secure, and
            reliable logistics solutions. We help businesses
            move forward with smarter delivery services.
          </p>

          <div className="delivery-hero-buttons">
            <a href="#contact" className="delivery-btn-primary">
              Become a Partner <span>↗</span>
            </a>

            <a href="#services" className="delivery-btn-secondary">
              Explore Services <span>→</span>
            </a>
          </div>

          {/* Hero Stats */}
          <div className="delivery-hero-stats">

            <div className="delivery-stat">
              <h3>10K<span>+</span></h3>
              <p>Deliveries Completed</p>
            </div>

            <div className="delivery-stat-divider"></div>

            <div className="delivery-stat">
              <h3>98<span>%</span></h3>
              <p>On-Time Delivery</p>
            </div>

            <div className="delivery-stat-divider"></div>

            <div className="delivery-stat">
              <h3>50<span>+</span></h3>
              <p>Delivery Partners</p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="delivery-hero-visual">

          <div className="delivery-hero-image-bg"></div>

          <img
            src="https://images.unsplash.com/photo-1659353741091-e0274bb50905?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Delivery professional handling packages"
            className="delivery-hero-image"
          />

          {/* Floating Card */}
          <div className="delivery-floating-card">
            <div className="delivery-floating-icon">✓</div>
            <div>
              <h4>Safe & Secure</h4>
              <p>Every delivery matters</p>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="delivery-experience-badge">
            <span>24/7</span>
            <p>Delivery Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
