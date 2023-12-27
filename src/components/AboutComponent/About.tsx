import { Parallax, useParallax } from "react-scroll-parallax";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="container d-flex justify-content-center align-center flex-column">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper d-flex justify-content-center">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Profile Image"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src="/assets/self-image.jpg"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                    
              </p>
              <p className="about-wrapper__info-text">
             
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="assets/resume.pdf"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
