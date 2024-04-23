import React from 'react';

import image1 from '../images/car2.png'
import image2 from '../images/car3.png'
import image3 from '../images/car4.png'
import image4 from '../images/car2.png'
import image5 from '../images/car4.png'
import image6 from '../images/car2.png'


function Portfolio() {
  return (
    <div id='portfolio'>
    <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Unveiling Tomorrow's Drive.</h3>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image1} alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Horizon</div>
                            <div className="portfolio-caption-subheading text-muted">Neon Navigator</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image2} alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Pulse Electra</div>
                            <div className="portfolio-caption-subheading text-muted">Neon Cruiser</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image3} alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Pulse</div>
                            <div className="portfolio-caption-subheading text-muted">Sleek Speedster</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image4} alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Nexus</div>
                            <div className="portfolio-caption-subheading text-muted">Futuristic Fusion</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image5} alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Voltara</div>
                            <div className="portfolio-caption-subheading text-muted">Eco-Revolution</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image6} alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Evolve</div>
                            <div className="portfolio-caption-subheading text-muted">Neon Genesis</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  );
}

export default Portfolio;
