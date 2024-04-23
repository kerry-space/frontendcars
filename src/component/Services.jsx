import React from "react";

function Services() {
  return (
    <div>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
             Driving Innovation Forward!.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" ></i>
              </span>
              <h4 className="my-3">Neon Car Sales</h4>
              <p className="text-muted">
                Discover the future of transportation with our range of sleek
                and futuristic Neon Car models. From compact city cruisers to
                high-performance electric vehicles, we have something for every
                driver.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Customization and Personalization</h4>
              <p className="text-muted">
                Make your Neon Car truly yours with our extensive customization
                options. From exterior finishes to interior features, tailor
                your ride to reflect your unique style and preferences..
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Advanced Technology Integration</h4>
              <p className="text-muted">
                Stay ahead of the curve with our state-of-the-art technology
                integration services. Experience seamless connectivity,
                intelligent automation, and cutting-edge safety features
                designed to enhance your driving experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
