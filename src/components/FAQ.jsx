
import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What delivery services does DeliverPro offer?",
      answer:
        "DeliverPro offers delivery solutions such as same-day delivery, express delivery, e-commerce delivery, last-mile delivery, business logistics, and return management.",
    },
    {
      question: "How can I schedule a delivery?",
      answer:
        "You can contact our team through the website to discuss your delivery requirements and arrange a pickup.",
    },
    {
      question: "Can I track my package?",
      answer:
        "Delivery tracking options depend on the service selected. Contact our team for information about tracking and delivery updates.",
    },
    {
      question: "Do you provide business delivery solutions?",
      answer:
        "Yes. DeliverPro is designed to support businesses with delivery and logistics solutions based on their operational requirements.",
    },
    {
      question: "How much does a delivery cost?",
      answer:
        "Delivery charges depend on factors such as pickup and destination locations, package size, distance, and delivery speed. Contact us for a quote.",
    },
    {
      question: "What should I do if my package is delayed?",
      answer:
        "Please contact our support team with your delivery details so we can help you check the status of your shipment.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="delivery-faq" id="faq">
      <div className="delivery-faq-container">

        {/* Section Heading */}
        <div className="delivery-faq-heading">
          <span className="delivery-faq-label">
            GOT QUESTIONS?
          </span>

          <h2>
            Frequently Asked
            <span> Questions.</span>
          </h2>

          <p>
            Find answers to common questions about our delivery services
            and how we can help your business.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="delivery-faq-content">

          <div className="delivery-faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`delivery-faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={faq.question}
              >
                <button
                  className="delivery-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>

                  <span className="delivery-faq-toggle">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className="delivery-faq-answer"
                  aria-hidden={activeIndex !== index}
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Contact Card */}
          <div className="delivery-faq-contact">
            <div className="delivery-faq-contact-icon">
              <span className="material-symbols-rounded">
                support_agent
              </span>
            </div>

            <h3>Still Have Questions?</h3>

            <p>
              Can't find the answer you're looking for? Get in touch
              with our team and we'll be happy to help.
            </p>

            <a href="#contact" className="delivery-faq-button">
              Contact Our Team <span>↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;
