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
              <h1>
                {name} {lastname}
              </h1>
              <p className="about-wrapper__info-text">{aboutme}</p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
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
