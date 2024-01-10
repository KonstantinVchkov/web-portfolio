import { useEffect, useState } from "react";
import "../../styles/about.css";
import { AboutBgTheme } from "../../utils/AboutTheme";
import { AboutMe } from "../../types/ProjectTypes";

const About = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  skills,
}: AboutMe) => {
  const { aboutBgTheme, themeCn } = AboutBgTheme();
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(4);
  const [isTabletMode, setIsTabletMode] = useState(false);

  useEffect(() => {
    updateTabletMode();
    window.addEventListener("resize", updateTabletMode);
    return () => {
      window.removeEventListener("resize", updateTabletMode);
    };
  }, []);

  const updateTabletMode = () => {
    setIsTabletMode(window.innerWidth <= 800);
  };

  const handleDrop = () => {
    const newVisibleSkillsCount = visibleSkillsCount + 4;
    setVisibleSkillsCount(Math.min(newVisibleSkillsCount, skills.length));
  };
  const skillsContainerStyle = {
    height: isTabletMode ? `${visibleSkillsCount * 55}px` : "auto",
    overflow: "hidden",
  };
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
              <span className="icon">👨🏻‍💻</span>
              <p className="about-wrapper__info-text">{firstParagraph}</p>
              <p className="about-wrapper__info-text">{secondParagraph}</p>
              <p className="about-wrapper__info-text">{thirdParagraph}</p>
              <p className="about-wrapper__info-text">{fourthParagraph}</p>
            </div>
          </div>
          <div className="skills" style={skillsContainerStyle}>
            <h2>Tech Skills</h2>
            {skills
              .slice(0, isTabletMode ? visibleSkillsCount : skills.length)
              .map((skill, idx) => (
                <p className={themeCn} key={idx}>
                  {skill}
                </p>
              ))}
          </div>
          {isTabletMode && visibleSkillsCount < skills.length && (
            <button
              onClick={handleDrop}
              className="cta-btn about-btn cta-btn--hero"
            >
              Show More
            </button>
          )}
          <span className="d-flex mt-3">
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn about-btn cta-btn--hero"
              href={"/assets/KonstantinVchkov_CV.pdf"}
            >
              View Resume
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
