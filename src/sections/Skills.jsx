
import "./Skills.css";

function Skills({ language }) {
  const isEnglish = language === "en";


  const skillGroups = [
    {
      title: isEnglish ? "Programming Languages" : "لغات البرمجة",
      skills: ["JavaScript", "Python", "Java", "C++", "PHP"],
    },
    {
      title: isEnglish
        ? "Frontend & Mobile Development"
        : "تطوير الواجهات وتطبيقات الجوال",
      skills: ["React", "Flutter", "HTML", "CSS"],
    },
    {
      title: isEnglish ? "Backend & APIs" : "تطوير الخلفية وواجهات API",
      skills: ["Node.js", "Express.js", "Laravel", "Django", "REST APIs"],
    },
    {
      title: isEnglish ? "Databases" : "قواعد البيانات",
      skills: ["MongoDB", "Mongoose", "MySQL", "SQL", "Firebase"],
    },
    {
      title: isEnglish ? "Development Tools" : "أدوات التطوير",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];


  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <p className="skills-label">
          {isEnglish ? "WHAT I WORK WITH" : "التقنيات التي أستخدمها"}
        </p>

        <h2>
          {isEnglish ? "My Skills" : "مهاراتي"}
        </h2>

        <p className="skills-intro">
          {isEnglish
            ? "Technologies and tools I use to build and develop projects."
            : "مجموعة من التقنيات والأدوات التي أستخدمها في بناء وتطوير المشاريع."}
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
