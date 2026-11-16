
import "./Certificates.css";

function Certificates({ language }) {
  const isEnglish = language === "en";


  const mainCertificates = [
    {
      name: isEnglish ? "Golden Trainee" : "المتدرب الذهبي",
      file: "/certificates/golden-trainee.pdf",
      organization: isEnglish
        ? "Aja Space Information Technology"
        : "فضاء أجا لتقنية المعلومات",
      description: isEnglish
        ? "Awarded for outstanding performance and commitment during the Programmer Development Program."
        : "شهادة تقدير نظير التميز والالتزام خلال برنامج تطوير المبرمجين.",
    },
    {
      name: isEnglish
        ? "Object-Oriented Programming (OOP) with PHP"
        : "البرمجة كائنية التوجه (OOP) لتطبيقات PHP",
      file: "/certificates/php-oop.pdf",
      organization: isEnglish
        ? "Qassim Tech Association"
        : "جمعية القصيم التقنية",
      description: isEnglish
        ? "Training in object-oriented programming concepts using PHP."
        : "تدريب على مفاهيم البرمجة كائنية التوجه باستخدام PHP.",
    },
    {
      name: isEnglish ? "Artificial Intelligence Track" : "مسار الذكاء الاصطناعي",
      file: "/certificates/ai-track.pdf",
      organization: "TechMinds",
      description: isEnglish
        ? "Participation in an artificial intelligence learning track."
        : "المشاركة في مسار تعليمي متخصص في الذكاء الاصطناعي.",
    },
    {
      name: isEnglish
        ? "Introduction to Bug Bounty Programs"
        : "مقدمة في برامج مكافآت اكتشاف الثغرات",
      file: "/certificates/bug-bounty.pdf",
      organization: isEnglish
        ? "Google Developer Groups (GDG) – Qassim"
        : "مجموعة مطوري جوجل (GDG) في القصيم",
      description: isEnglish
        ? "An introduction to bug bounty programs and vulnerability discovery."
        : "التعرف على برامج مكافآت اكتشاف الثغرات ومفاهيمها الأساسية.",
    },
    {
      name: isEnglish
        ? "Introduction to Cybersecurity"
        : "مقدمة في الأمن السيبراني",
      file: "/certificates/cybersecurity.pdf",
      organization: "Bairaq Learn",
      description: isEnglish
        ? "Attendance certificate for an introductory cybersecurity workshop."
        : "شهادة حضور ورشة تعريفية في مجال الأمن السيبراني.",
    },
  ];

  const additionalCertificates = [
    {
      name: isEnglish
        ? "Robotics Engineering: How Disciplines Integrate to Build an Intelligent Robot"
        : "هندسة الروبوتات: كيف تتكامل التخصصات لصناعة روبوت ذكي",
      file: "/certificates/robotics.pdf",
      organization: isEnglish
        ? "Google Group – Development Department"
        : "قسم التطوير بمجموعة قوقل",
    },
    {
      name: isEnglish
        ? "Fundamentals of Design"
        : "العناصر الأساسية للتصميم",
      file: "/certificates/design-fundamentals.pdf",
      organization: "Coursera",
    },
    {
      name: isEnglish
        ? "Color Theory and Image Formatting"
        : "نظرية الألوان وتنسيقات الصور",
      file: "/certificates/color-theory.pdf",
      organization: "Coursera",
    },
    {
      name: isEnglish
        ? "Typography and Spacing"
        : "فن الخط (Typography) والمساحات",
      file: "/certificates/typography.pdf",
      organization: "Coursera",
    },
  ];


  return (
    <section className="certificates" id="certificates">
      <div className="certificates-content">
        <p className="certificates-label">
          {isEnglish ? "MY ACHIEVEMENTS" : "إنجازاتي"}
        </p>

        <h2>
          {isEnglish ? "Certificates & Achievements" : "الشهادات والإنجازات"}
        </h2>

        <p className="certificates-intro">
          {isEnglish
            ? "A collection of certifications and achievements from my learning journey."
            : "مجموعة من الشهادات والإنجازات التي حصلت عليها خلال رحلتي التعليمية والمهنية."}
        </p>

       
  <h3 className="certificates-group-title">
    {isEnglish ? "Main Certificates" : "الشهادات الرئيسية"}
  </h3>

  <div className="certificates-grid">
    {mainCertificates.map((certificate) => (
      <article className="certificate-card" key={certificate.name}>
        <div className="certificate-icon">✦</div>
        <h3>{certificate.name}</h3>
        <h4>{certificate.organization}</h4>
        <p>{certificate.description}</p>
        <a href={certificate.file} target="_blank" rel="noopener noreferrer">
          {isEnglish ? "View Certificate" : "عرض الشهادة"}
        </a>
      </article>
    ))}
  </div>

  <h3 className="certificates-group-title">
    {isEnglish ? "Additional Learning" : "التعلم الإضافي"}
  </h3>

  <div className="certificates-grid">
    {additionalCertificates.map((certificate) => (
      <article className="certificate-card" key={certificate.name}>
        <div className="certificate-icon">✦</div>
        <h3>{certificate.name}</h3>
        <h4>{certificate.organization}</h4>
        <a href={certificate.file} target="_blank" rel="noopener noreferrer">
          {isEnglish ? "View Certificate" : "عرض الشهادة"}
        </a>
      </article>
    ))}
  </div>

      </div>
    </section>
  );
}

export default Certificates;
