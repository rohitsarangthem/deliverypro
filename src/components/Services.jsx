
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h11v11H3z" />
          <path d="M14 11h4l3 3v4h-7z" />
          <circle cx="7.5" cy="18" r="2" />
          <circle cx="17.5" cy="18" r="2" />
        </svg>
      ),
      title: "Same-Day Delivery",
      description:
        "Get your packages delivered on the same day with our fast and dependable delivery network.",
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L4 14h7l-1 8 10-13h-7z" />
        </svg>
      ),
      title: "Express Delivery",
      description:
        "When time matters, our express delivery solutions ensure your packages reach their destination quickly.",
    },
    {
      number: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8l-9 5-9-5" />
          <path d="M3 8l9-5 9 5v9l-9 5-9-5z" />
          <path d="M12 13v9" />
        </svg>
      ),
      title: "E-commerce Delivery",
      description:
        "Reliable delivery solutions for online stores, helping businesses deliver orders to customers.",
    },
    {
      number: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9v11h14V9" />
          <path d="M9 20v-6h6v6" />
          <path d="M12 6v2" />
        </svg>
      ),
      title: "Last-Mile Delivery",
      description:
        "Efficient last-mile delivery services connecting businesses with customers at their doorstep.",
    },
    {
      number: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V4h8v3" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      ),
      title: "Business Logistics",
      description:
        "Flexible logistics and transportation solutions designed to support growing businesses.",
    },
    {
      number: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10a9 9 0 1 1 2.6 6.4" />
          <path d="M3 16v-6h6" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
      title: "Return Management",
      description:
        "Simplify product returns with organized pickup and reliable reverse logistics services.",
    },
  ];

  return (
    <section className="delivery-services" id="services">
      <div className="delivery-services-container">

        {/* Section Heading */}
        <div className="delivery-services-heading">
          <div className="delivery-services-label">
            WHAT WE OFFER
          </div>

          <h2>
            Delivery Solutions
            <span> That Move You Forward</span>
          </h2>

          <p>
            From everyday deliveries to complex logistics operations,
            we provide reliable solutions that keep your business moving.
          </p>
        </div>

        {/* Services Grid */}
        <div className="delivery-services-grid">
          {services.map((service) => (
            <div className="delivery-service-card" key={service.number}>

              <div className="delivery-service-top">
                <div className="delivery-service-icon">
                  {service.icon}
                </div>

                <span className="delivery-service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="delivery-service-link">
                Learn More <span>↗</span>
              </a>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="delivery-services-bottom">
          <p>Looking for a delivery solution for your business?</p>

          <a href="#contact">
            Let's Talk <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
