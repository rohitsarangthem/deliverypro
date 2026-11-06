
import "./Statistics.css";

function Statistics() {
  const stats = [
    {
      number: "10K+",
      label: "Packages Delivered",
      icon: "inventory_2",
    },
    {
      number: "500+",
      label: "Happy Customers",
      icon: "sentiment_satisfied",
    },
    {
      number: "50+",
      label: "Delivery Partners",
      icon: "groups",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: "thumb_up",
    },
  ];

  return (
    <section className="delivery-stats" id="statistics">
      <div className="delivery-stats-container">

        <div className="delivery-stats-heading">
          <span className="delivery-stats-label">
            DELIVERPRO IN NUMBERS
          </span>

          <h2>
            Making Every Delivery
            <span> Count.</span>
          </h2>

          <p>
            Our commitment to dependable service is reflected in every
            package we handle and every customer we serve.
          </p>
        </div>

        <div className="delivery-stats-grid">
          {stats.map((stat) => (
            <div className="delivery-stats-card" key={stat.label}>
              <div className="delivery-stats-icon">
                <span className="material-symbols-rounded">
                  {stat.icon}
                </span>
              </div>

              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Statistics;
