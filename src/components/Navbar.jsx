
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ language, onLanguageChange }) {
  const isEnglish = language === "en";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        Rahaf.
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
       <Link to="/" onClick={closeMenu}>
         {isEnglish ? "Home" : "الرئيسية"}
       </Link>

        <Link to="/#about" onClick={closeMenu}>
          {isEnglish ? "About" : "من أنا"}
        </Link>

        <Link to="/#projects" onClick={closeMenu}>
          {isEnglish ? "Projects" : "مشاريعي"}
        </Link>

        <Link to="/#skills" onClick={closeMenu}>
          {isEnglish ? "Skills" : "مهاراتي"}
        </Link>

        <Link to="/#certificates" onClick={closeMenu}>
          {isEnglish ? "Certificates" : "الشهادات"}
        </Link>

        <Link to="/#contact" onClick={closeMenu}>
          {isEnglish ? "Contact" : "تواصل معي"}
        </Link>

        <button
          className="language-button"
          onClick={() => {
            onLanguageChange();
            closeMenu();
          }}
        >
          {isEnglish ? "العربية" : "English"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
