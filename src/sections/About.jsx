import "./About.css";

function About({ language }) {
  const isEnglish = language === "en";

  return (
    <section className="about" id="about">
      <div className="about-content">
        <p className="about-label">
          {isEnglish ? "GET TO KNOW ME" : "تعرف عليّ"}
        </p>

        <h2>
          {isEnglish ? "About Me" : "من أنا"}
        </h2>

        <p className="about-description">
          {isEnglish
            ? "I'm a Computer Science graduate with an interest in software engineering and developing technical solutions. I enjoy understanding and analyzing problems, then turning ideas into practical applications and solutions, with a focus on software quality and user experience."
            : "أنا خريجة علوم حاسب، مهتمة بهندسة البرمجيات وتطوير الحلول التقنية. أستمتع بفهم المشكلات وتحليلها وتحويل الأفكار إلى تطبيقات وحلول عملية، مع الاهتمام بجودة البرمجيات وتجربة المستخدم."}
        </p>

        <p className="about-description">
          {isEnglish
            ? "I'm continuously developing my programming and software development skills while exploring new technologies and areas of interest. My goal is to grow as a Software Engineer and contribute to building meaningful and impactful solutions."
            : "أعمل على تطوير مهاراتي في البرمجة وتقنيات تطوير البرمجيات، وأحرص على التعلم المستمر واستكشاف مجالات وتقنيات جديدة. أطمح إلى النمو كمهندسة برمجيات والمساهمة في بناء حلول تقنية ذات قيمة وأثر."}
        </p>
      </div>
    </section>
  );
}

export default About;
