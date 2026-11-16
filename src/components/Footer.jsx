
import "./Footer.css";

function Footer({ language }) {
  const isEnglish = language === "en";


  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Rahaf.
        {isEnglish
          ? " All rights reserved."
          : " جميع الحقوق محفوظة."}
      </p>

      <a
         href="#top"
         onClick={(event) => {
           event.preventDefault();
           window.scrollTo({
             top: 0,
             behavior: "smooth",
           });
         }}
      >
        {isEnglish ? "Back to top ↑" : "العودة للأعلى ↑"}
      </a>
    </footer>
  );
}

export default Footer;
