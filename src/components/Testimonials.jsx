
import { useEffect, useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Online Store Owner",
      initials: "AM",
      review:
        "DeliverPro has made managing our daily orders much easier. Their delivery process is smooth, and the service is reliable.",
    },
    {
      name: "Sarah Williams",
      role: "Business Owner",
      initials: "SW",
      review:
        "A convenient delivery solution for our business. The team is professional, responsive, and makes the entire process simple.",
    },
    {
      name: "Daniel Thomas",
      role: "E-commerce Manager",
      initials: "DT",
      review:
        "We appreciate the consistent communication and careful handling of our packages. It has been a positive experience.",
    },
    {
      name: "Emily Johnson",
      role: "Retail Store Owner",
      initials: "EJ",
      review:
        "The delivery experience has been straightforward and convenient. It helps us manage our customer orders more efficiently.",
    },
    {
      name: "Michael Brown",
      role: "Business Manager",
      initials: "MB",
      review:
        "A helpful delivery partner for our business. We value the professional service and attention given to our packages.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="delivery-testimonials" id="testimonials">
      <div className="delivery-testimonials-container">

        {/* Heading */}
        <div className="delivery-testimonials-heading">
          <span className="delivery-testimonials-label">
            CUSTOMER FEEDBACK
          </span>

          <h2>
            Trusted by Businesses.
            <span> Appreciated by Customers.</span>
          </h2>

          <p>
            Building lasting relationships through dependable delivery
            services and customer-focused support.
          </p>
        </div>

        {/* Slider */}
        <div className="delivery-testimonials-slider">
          <div
            className="delivery-testimonials-track"
            style={{
              transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                className="delivery-testimonial-slide"
                key={testimonial.name}
              >
                <div className="delivery-testimonial-card">

                  <div className="delivery-testimonial-stars">
                    ★★★★★
                  </div>

                  <span className="delivery-testimonial-quote">“</span>

                  <p className="delivery-testimonial-review">
                    {testimonial.review}
                  </p>

                  <div className="delivery-testimonial-author">
                    <div className="delivery-testimonial-avatar">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="delivery-testimonials-controls">

          <div className="delivery-testimonials-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`delivery-testimonials-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}
          </div>

          <div className="delivery-testimonials-arrows">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              aria-label="Previous testimonials"
            >
              <span>←</span>
            </button>

            <button
              onClick={nextSlide}
              disabled={activeIndex >= maxIndex}
              aria-label="Next testimonials"
            >
              <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
