import { IProject } from "../../types/ProjectTypes";
import "./style.css";
const ProjectCard = ({
  name,
  showLive,
  linkcode,
  description,
  tech,
  image,
}: IProject) => {
  return (
    <>
      <div className="col-lg-4 my-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{name}</h3>
          <div>
            <p className="my-4">{description}</p>
            {tech.map((techstack) => (
              <p className="my-4">{techstack}</p>
            ))}
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--hero"
            href={showLive}
          >
            See Live
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn text-color-main"
            href={linkcode}
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image load-hidden">
          <a rel="noreferrer" href="#!" target="_blank">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              className="thumbnail rounded js-tilt"
            >
              <img alt="Project Image" className="img-fluid" src={image} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
