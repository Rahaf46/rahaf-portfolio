
import "./Contact.css";

function Contact({ language }) {
  const isEnglish = language === "en";

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="contact-label">
          {isEnglish ? "LET'S CONNECT" : "لنتواصل معًا"}
        </p>

        <h2>
          {isEnglish ? "Get In Touch" : "تواصل معي"}
        </h2>

        <p className="contact-description">
          {isEnglish
            ? "I'm always open to new opportunities, collaborations, and meaningful conversations. Feel free to reach out!"
            : "يسعدني التواصل معكم واستكشاف فرص جديدة للتعاون والعمل. لا تترددوا في التواصل معي!"}
        </p>

        <div className="contact-links">
          <a href="mailto:masalhh11@gmail.com">
            {isEnglish ? "Email Me" : "راسلني عبر البريد"}
          </a>

          <a
            href="https://www.linkedin.com/in/rahafalosaimi66/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Rahaf46"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
