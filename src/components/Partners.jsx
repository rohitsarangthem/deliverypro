import "./Partners.css";

function Partners() {
  const partners = [
    "SHOPIFY",
    "amazon",
    "Flipkart",
    "Walmart",
    "eBay",
    "DHL"
  ];

  return (
    <section className="delivery-partners">
      <div className="delivery-partners-container">

        <div className="delivery-partners-heading">
          <span>OUR NETWORK</span>
          <h2>Trusted by businesses that move forward</h2>
        </div>

        <div className="delivery-partners-logos">
          {partners.map((partner, index) => (
            <div
              className={`delivery-partner-logo partner-${index + 1}`}
              key={partner}
            >
              {partner}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Partners;
