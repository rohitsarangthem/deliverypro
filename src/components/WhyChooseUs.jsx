
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const benefits = [
    {
      icon: "local_shipping",
      title: "Fast & On-Time Delivery",
      description:
        "We prioritize speed and punctuality to ensure your packages arrive when expected.",
    },
    {
      icon: "handshake",
      title: "Trusted Delivery Partners",
      description:
        "Our reliable delivery network helps businesses provide a smooth customer experience.",
    },
    {
      icon: "location_on",
      title: "Real-Time Tracking",
      description:
        "Stay informed with delivery updates and better visibility throughout the journey.",
    },
    {
      icon: "verified_user",
      title: "Secure Package Handling",
      description:
        "Every package is handled with care to ensure safe and dependable delivery.",
    },
  ];

  return (
    <section className="delivery-why" id="why-choose-us">
      <div className="delivery-why-container">

        {/* Left Image */}
        <div className="delivery-why-visual">
          <div className="delivery-why-image-wrapper">
            <img
              src="https://images.openai.com/static-rsc-4/Ikd7p8dqV8gdjftEDjSFD3NifS1KQadW46cxcd-Eqe-pStT27nz5-RHZzLMNZW98twpukiwun83JaLGXgM4goe7lqeCQim53RRnlNMG_YVnWlgm4CwJQGovAicSwddiVZMKaENSZhFeJyKR24i2dVM_TKf19pRbqejY2Xjdwe3sKU2TOcTDn-fjHUQgSa-yC?purpose=fullsize"
              alt="Delivery professional preparing packages for delivery"
              className="delivery-why-image"
            />
          </div>

          {/* Floating Support Card */}
          <div className="delivery-why-floating-card">
            <div className="delivery-why-floating-icon">
              <span className="material-symbols-rounded">
                check_circle
              </span>
            </div>

            <div>
              <strong>Reliable Service</strong>
              <span>Every Delivery Matters</span>
            </div>
          </div>

          <div className="delivery-why-decoration"></div>
        </div>

        {/* Right Content */}
        <div className="delivery-why-content">

          <span className="delivery-why-label">
            WHY CHOOSE DELIVERPRO
          </span>

          <h2>
            Delivering More Than
            <span> Just Packages.</span>
          </h2>

          <p className="delivery-why-intro">
            We believe every delivery is an opportunity to build trust.
            That's why we focus on reliable service, efficient operations,
            and customer satisfaction at every step.
          </p>

          {/* Benefits */}
          <div className="delivery-why-benefits">

            {benefits.map((benefit) => (
              <div className="delivery-why-benefit" key={benefit.title}>

                <div className="delivery-why-benefit-icon">
                  <span className="material-symbols-rounded">
                    {benefit.icon}
                  </span>
                </div>

                <div className="delivery-why-benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>

              </div>
            ))}

          </div>

          {/* CTA */}
          <a href="#contact" className="delivery-why-button">
            Work With Us <span>↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
