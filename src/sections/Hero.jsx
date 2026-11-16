import "./Hero.css";

function Hero({ language }) {
  const isEnglish = language === "en";

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">
          {isEnglish ? "HELLO, WELCOME TO MY PORTFOLIO" : "مرحبًا، أهلًا بك في ملف أعمالي"}
        </p>

        <h1>
          {isEnglish
            ? "Turning ideas into meaningful digital experiences."
            : "أحوّل الأفكار إلى تجارب رقمية مميزة."}
        </h1>

        <p className="hero-description">
          {isEnglish
            ? "I'm passionate about software development and creating simple, thoughtful, and user-friendly solutions."
            : "أهتم بتطوير البرمجيات وبناء حلول بسيطة ومدروسة وسهلة الاستخدام."}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary-button">
            {isEnglish ? "Explore My Work" : "استكشف مشاريعي"}
          </a>

          <a href="#contact" className="hero-secondary-button">
            {isEnglish ? "Get In Touch" : "تواصل معي"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
