import React from "react";
import image1 from "../images/kerry.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Team() {
  return (
    <div id="team">
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Meet Our Driving Force
            </h2>
            <h3 className="section-subheading text-muted">
              The Incredible Team Behind Neon Car.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src={image1}
                  alt="..."
                />
                <h4>Kerry Jalal</h4>
                <p className="text-muted">Lead Designer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal Twitter Profile"
                >
                  <IoLogoTwitter/>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal Facebook Profile"
                >
                  <IoLogoFacebook/>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal LinkedIn Profile"
                >
                  <IoLogoLinkedin/>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src={image1}
                  alt="..."
                />
                <h4>Kerry Jalal</h4>
                <p className="text-muted">Lead Marketer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal Twitter Profile"
                >
                  <IoLogoTwitter/>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal Facebook Profile"
                >
                    <IoLogoFacebook/>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal LinkedIn Profile"
                >
                 <IoLogoLinkedin/>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src={image1}
                  alt="..."
                />
                <h4>Kerry Jalal</h4>
                <p className="text-muted">Lead Developer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal Twitter Profile"
                >
                  <IoLogoTwitter/>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal Facebook Profile"
                >
                      <IoLogoFacebook/>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Kerry Jalal LinkedIn Profile"
                >
                 <IoLogoLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Our passionate team of visionaries, engineers, and automotive
                enthusiasts drives the innovation at Neon Car. With dedication
                and expertise, we push boundaries to shape the future of
                mobility. From design to engineering, marketing to customer
                support, each member plays a vital role in our mission to
                revolutionize the automotive industry. Get to know the faces
                behind our groundbreaking concepts and discover the driving
                force propelling Neon Car forward..
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
