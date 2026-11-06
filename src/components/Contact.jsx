
import "./Contact.css";

function Contact() {
  const contactDetails = [
    {
      icon: "location_on",
      title: "Our Location",
      value: "Your Business Address",
    },
    {
      icon: "call",
      title: "Call Us",
      value: "+1 (800) 123-4567",
    },
    {
      icon: "mail",
      title: "Email Us",
      value: "hello@deliverypro.com",
    },
    {
      icon: "schedule",
      title: "Working Hours",
      value: "Monday – Saturday, 9 AM – 6 PM",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section className="delivery-contact-section" id="contact">
      <div className="delivery-contact-container">

        {/* Section Heading */}
        <div className="delivery-contact-heading">
          <span className="delivery-contact-tag">GET IN TOUCH</span>
          <h2>
            Let's Get Your <span>Delivery Moving!</span>
          </h2>
          <p>
            Have a delivery to schedule or a question about our services?
            We're here to help. Get in touch with our team today.
          </p>
        </div>

        <div className="delivery-contact-grid">

          {/* Contact Information */}
          <div className="delivery-contact-info">
            <div className="delivery-contact-info-header">
              <h3>Let's Talk Business</h3>
              <p>
                Whether you need a one-time delivery or a reliable
                logistics partner, we'd love to hear from you.
              </p>
            </div>

            <div className="delivery-contact-details">
              {contactDetails.map((item, index) => (
                <div className="delivery-contact-detail" key={index}>
                  <div className="delivery-contact-icon">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="delivery-contact-social">
              <h4>Follow Us</h4>
              <div className="delivery-contact-social-links">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="LinkedIn">IN</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="delivery-contact-form-wrapper">
            <div className="delivery-contact-form-header">
              <h3>Send Us a Message</h3>
              <p>Fill out the form and we'll get back to you shortly.</p>
            </div>

            <form
              className="delivery-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="delivery-contact-form-row">
                <div className="delivery-contact-field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="delivery-contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="delivery-contact-form-row">
                <div className="delivery-contact-field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="delivery-contact-field">
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select id="contact-service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="same-day">Same-Day Delivery</option>
                    <option value="scheduled">Scheduled Delivery</option>
                    <option value="business">Business Logistics</option>
                    <option value="express">Express Delivery</option>
                  </select>
                </div>
              </div>

              <div className="delivery-contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="delivery-contact-submit">
                Send Message
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="delivery-contact-cta">
          <div>
            <h3>Ready to Deliver Better?</h3>
            <p>Let's make your deliveries faster, easier, and more reliable.</p>
          </div>

          <a href="tel:+18001234567" className="delivery-contact-cta-btn">
            Call Our Team
            <span className="material-symbols-outlined">call</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
