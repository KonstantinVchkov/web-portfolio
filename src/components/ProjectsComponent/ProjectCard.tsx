import { useRef } from "react";
import { IProject } from "../../types/ProjectTypes";
import "../../styles/project-card-style.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeContext } from "../../context/ThemeContext";

const ProjectCard = ({
  name,
  showLive,
  linkcode,
  description,
  tech,
  image,
}: IProject) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const { theme } = useThemeContext();
  const classes = theme === "light" ? "project-card" : "project-card-dark";
  return (
    <motion.div
      style={{
        scale: scaleProgress,
      }}
      ref={ref}
      className={classes}
    >
      <div className="col-lg-4 my-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{name}</h3>
          <div className="image-property">
            <img src={image} alt="" />
          </div>
          <p className="my-4">{description}</p>
          {showLive && (
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--hero"
              href={`${showLive}`}
            >
              See Live
            </a>
          )}

          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn view-code cta-btn--hero"
            href={`${linkcode}`}
          >
            Source Code
          </a>
        </div>
      </div>
      <h2>Tech Stack Used:</h2>
      <div className="tech-stacks">
        {tech.map((techstack, idx) => (
          <span key={idx} className="tech my-4">
            {techstack}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
