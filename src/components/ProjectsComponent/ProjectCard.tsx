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
  const {classes} = useProjectsCards()
  return (
    <div className={`${classes}`}>
      <div className="col-lg-4 my-4 col-sm-12">
        <div className="project-wrapper__text">
          <h3 className="project-wrapper__text-title">{name}</h3>
          <div className="image-property">
            <img src={image} alt="project-info-img" />
          </div>
          <p className="my-4">{description}</p>
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
      </div>
      <h2>Tech Stack Used:</h2>
      <div className="tech-stacks">
        {tech.map((techstack, idx) => (
          <span key={idx} className="tech my-4">
            {techstack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
