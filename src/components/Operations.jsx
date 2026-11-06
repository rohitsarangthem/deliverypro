import "./Operations.css";

function Operations() {
  const steps = [
    {
      number: "01",
      icon: "inventory_2",
      title: "Package Pickup",
      description:
        "We collect your packages from your location and prepare them for a smooth delivery process.",
    },
    {
      number: "02",
      icon: "warehouse",
      title: "Sorting & Processing",
      description:
        "Packages are carefully sorted and organized to ensure efficient handling and dispatch.",
    },
    {
      number: "03",
      icon: "local_shipping",
      title: "Fast Transportation",
      description:
        "Our delivery network helps move your packages safely and efficiently toward their destination.",
    },
    {
      number: "04",
      icon: "package_2",
      title: "Final Delivery",
      description:
        "We complete the delivery with care, making sure packages reach the right destination.",
    },
  ];

  return (
    <section className="delivery-operations" id="operations">
      <div className="delivery-operations-container">

        {/* Section Heading */}
        <div className="delivery-operations-heading">
          <span className="delivery-operations-label">
            HOW WE WORK
          </span>

          <h2>
            A Smarter Way to
            <span> Deliver Every Package.</span>
          </h2>

          <p>
            From the first pickup to the final doorstep, our streamlined
            process makes every delivery simple, efficient, and reliable.
          </p>
        </div>

        {/* Operations Steps */}
        <div className="delivery-operations-grid">
          {steps.map((step) => (
            <div className="delivery-operations-card" key={step.number}>
              <div className="delivery-operations-card-top">
                <span className="delivery-operations-number">
                  {step.number}
                </span>

                <div className="delivery-operations-icon">
                  <span className="material-symbols-rounded">
                    {step.icon}
                  </span>
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <div className="delivery-operations-card-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Operations;