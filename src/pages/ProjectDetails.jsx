import { Link , useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetails.css";


function ProjectDetails({ language }) {
  const { id } = useParams();
  const isEnglish = language === "en";

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <h2>{isEnglish ? "Project not found" : "المشروع غير موجود"}</h2>;
  }

  return (
    <section className="project-details-page">
        <Link to="/#projects" className="back-to-projects">
          {isEnglish ? "← Back to Projects" : "العودة إلى المشاريع →"}
          </Link>
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="project-details-image"
        />
      )}
      <h1>{project.name}</h1>
      <p> {isEnglish ? project.description.en : project.description.ar} </p>
      <div className="project-details-content">
  <div className="project-detail">
    <h2>{isEnglish ? "The Problem" : "المشكلة"}</h2>
    <p>
      {isEnglish
        ? project.details.problem.en
        : project.details.problem.ar}
    </p>
  </div>

  <div className="project-detail">
    <h2>{isEnglish ? "My Role" : "دوري"}</h2>
    <p>
      {isEnglish
        ? project.details.role.en
        : project.details.role.ar}
    </p>
  </div>

  <div className="project-detail">
    <h2>{isEnglish ? "The Solution" : "الحل"}</h2>
    <p>
      {isEnglish
        ? project.details.solution.en
        : project.details.solution.ar}
    </p>
  </div>

  <div className="project-detail">
    <h2>{isEnglish ? "The Result" : "النتيجة"}</h2>
    <p>
      {isEnglish
        ? project.details.result.en
        : project.details.result.ar}
    </p>
  </div>
</div>
<div className="project-technologies">
  {project.technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ))}
</div>

<a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  {isEnglish ? "View on GitHub" : "عرض المشروع على GitHub"}
</a>
    </section>
  );
}

export default ProjectDetails;