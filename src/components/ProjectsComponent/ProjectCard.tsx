import { IProject } from "../../types/ProjectTypes";
import "../../styles/project-card-style.css";
import useProjectsCards from "../../hooks/useProjectsCards";

const ProjectCard = ({
  name,
  showLive,
  linkcode,
  description,
  tech,
  image,
}: IProject) => {
  const { classes } = useProjectsCards();
  return (
    <div className={`project-card ${classes}`}>
      <div className="project-wrapper__text">
        <h3 className="project-wrapper__text-title">{name}</h3>
        <p>{description}</p>
        {showLive && (
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--hero"
            href={showLive}
          >
            See Live
          </a>
        )}
        {linkcode && (
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn view-code cta-btn--hero"
            href={linkcode}
          >
            Source Code
          </a>
        )}
      </div>
      <h2>Tech Stack Used:</h2>
      <div className="tech-stacks">
        {tech.map((techstack, idx) => (
          <span key={idx} className="tech">
            {techstack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
