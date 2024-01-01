import "./about.css";
import { useThemeContext } from "../../context/ThemeContext";
interface AboutMe {
  name?: string;
  lastname?: string;
  aboutme: string;
}
const About = ({ name, lastname, aboutme }: AboutMe) => {
  const { theme } = useThemeContext();
  const aboutBgTheme =
    theme === "light"
      ? "rgb(226 232 240)"
      : "linear-gradient(180.2deg, rgb(120, 85, 137) -6.9%, rgb(35, 9, 31) 76.7%)";

  return (
    <div id="about" style={{ background: aboutBgTheme }}>
      <div className="container d-flex justify-content-center align-center flex-column">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 logo">
            <img src="/assets/logo_transparent.png" alt="" />
          </div>
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
