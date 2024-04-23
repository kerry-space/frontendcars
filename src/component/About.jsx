import React from 'react';
import Header from './Header';

// Update the import paths with the actual paths where the images are stored 
import image1 from '../images/Our-Humble-Beginnings.webp';   
import image2 from '../images/An-Agency-is-Born.webp';
import image3 from '../images/Transition-to-Full-Service.webp';
import image4 from '../images/Phase-Two-Expansion.webp';

function About() {
  return (
    <div>
      <Header
        title='It’s a Big Story'
        subtitle="BE PART OF OUR STORY"
        buttonText="TELL ME MORE"
        Link="/services"
        showButton={false}
        image='../assets/img/header-bg.jpg' 
      />

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Journey</h2>
            <h3 className="section-subheading text-muted">Discover the evolution of our business over the years.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={image1} alt="Our Humble Beginnings in a Garage" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    In 2009, a small group of visionary entrepreneurs embarked on a journey to redefine the industry. 
                    With determination and passion, we laid the foundation for our company, starting from humble beginnings in a garage.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={image2} alt="The Birth of Our Agency" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    March 2011 marked a significant milestone as our company officially became an agency, offering a wide range of services to meet the evolving needs of our clients.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={image3} alt="Transition to Full Service" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    By December 2015, we had transitioned into a full-service agency, expanding our offerings to provide comprehensive solutions tailored to our clients' needs.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={image4} alt="Phase Two Expansion" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    In July 2020, we embarked on the next phase of our journey with a strategic expansion plan, positioning ourselves for growth and innovation in the years to come.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;