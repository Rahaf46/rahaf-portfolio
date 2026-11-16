
import "./Projects.css";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function Projects({ language }) {
  const isEnglish = language === "en";


  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <p className="projects-label">
          {isEnglish ? "MY WORK" : "أعمالي"}
        </p>

        <h2>
          {isEnglish ? "Featured Projects" : "مشاريع مختارة"}
        </h2>

        <p className="projects-intro">
          {isEnglish
            ? "Here are some of the projects I've built and worked on."
            : "هنا مجموعة من المشاريع التي عملت على تطويرها."}
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="project-image"
                 />
                )}
              <h3>{project.name}</h3>

              <p>{isEnglish ? project.description.en : project.description.ar}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <Link 
                to={`/projects/${project.id}`}
                className="project-link"
             >
                {isEnglish ? "View Details" : "عرض التفاصيل"}
              </Link>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
             >
                {isEnglish ? "View on GitHub" : "عرض المشروع على GitHub"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
