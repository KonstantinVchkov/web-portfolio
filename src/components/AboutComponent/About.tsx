import "./about.css";
interface AboutMe {
  name?: string;
  lastname?: string;
  aboutme: string;
}
const About = ({ name, lastname, aboutme }: AboutMe) => {
  return (
    <div id="about">
      <div className="container d-flex justify-content-center align-center flex-column">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">{aboutme}</p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href={"/assets/KonstantinVchkov_CV.pdf"}
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
