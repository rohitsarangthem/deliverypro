
import "./Coverage.css";

function Coverage() {
  const areas = [
    "Local Deliveries",
    "City-Wide Delivery",
    "Regional Shipping",
    "Nationwide Delivery",
  ];

  return (
    <section className="delivery-coverage" id="coverage">
      <div className="delivery-coverage-container">

        {/* Left Content */}
        <div className="delivery-coverage-content">
          <span className="delivery-coverage-label">
            OUR DELIVERY NETWORK
          </span>

          <h2>
            Delivering Across
            <span> Every Distance.</span>
          </h2>

          <p className="delivery-coverage-description">
            From nearby neighborhoods to destinations across the country,
            our delivery solutions help keep your business and customers connected.
          </p>

          <div className="delivery-coverage-areas">
            {areas.map((area, index) => (
              <div className="delivery-coverage-area" key={area}>
                <span className="material-symbols-rounded">
                  check_circle
                </span>
                <span>{area}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="delivery-coverage-button">
            Explore Delivery Options <span>↗</span>
          </a>
        </div>

        {/* Right Visual */}
        <div className="delivery-coverage-visual">
          <div className="delivery-coverage-map">
            <div className="delivery-coverage-map-circle circle-one"></div>
            <div className="delivery-coverage-map-circle circle-two"></div>
            <div className="delivery-coverage-map-circle circle-three"></div>

            <div className="delivery-coverage-map-center">
              <span className="material-symbols-rounded">
                location_on
              </span>
              <span>Delivery Network</span>
            </div>

            <div className="delivery-coverage-location location-one">
              <span className="material-symbols-rounded">location_on</span>
              <span>Local</span>
            </div>

            <div className="delivery-coverage-location location-two">
              <span className="material-symbols-rounded">location_on</span>
              <span>Regional</span>
            </div>

            <div className="delivery-coverage-location location-three">
              <span className="material-symbols-rounded">location_on</span>
              <span>National</span>
            </div>

            <div className="delivery-coverage-map-dot dot-one"></div>
            <div className="delivery-coverage-map-dot dot-two"></div>
            <div className="delivery-coverage-map-dot dot-three"></div>
          </div>

          <div className="delivery-coverage-info">
            <div className="delivery-coverage-info-icon">
              <span className="material-symbols-rounded">
                public
              </span>
            </div>
            <div>
              <strong>Connected Delivery Network</strong>
              <p>Flexible delivery solutions for different distances.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Coverage;
