import "../../styles/about.css";
import { AboutBgTheme } from "../../utils/AboutTheme";
import { AboutMe } from "../../types/ProjectTypes";
import { motion } from "framer-motion";
import useAboutMe from "../../hooks/useAboutMe";

const About = ({ skills, paragraphs }: AboutMe) => {
  const { aboutBgTheme, themeCn } = AboutBgTheme();
  const { isTabletMode, handleDrop, visibleSkillsCount, defaultAnimations } =
    useAboutMe();
  return (
    <div id="about" style={{ background: aboutBgTheme }}>
      <div className="container d-flex justify-content-center align-center flex-column">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 logo">
            <img src="/assets/logo-vchkov-dev.png" alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <span className="icon">👨🏻‍💻</span>
              {paragraphs.map((paragraph, idx) => (
                <p key={idx} className="about-wrapper__info-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="skills">
            <h2>Tech Skills</h2>
            <motion.span
              transition={{ staggerChildren: 0.1 }}
              initial="hidden"
              animate="visible"
            >
              {skills
                .slice(0, isTabletMode ? visibleSkillsCount : skills.length)
                .map((skill, idx) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    variants={defaultAnimations}
                    className={`${themeCn} `}
                    key={idx}
                  >
                    {skill}
                  </motion.span>
                ))}
            </motion.span>
          </div>
          {isTabletMode && visibleSkillsCount < skills.length && (
            <button
              onClick={() => handleDrop(skills)}
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
