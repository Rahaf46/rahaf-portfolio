
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,  useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "ar" : "en"
    );
  };

  return (
    <BrowserRouter>
      <ScrollToSection />
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        <Navbar
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero language={language} />
                <About language={language} />
                <Projects language={language} />
                <Skills language={language} />
                <Certificates language={language} />
                <Contact language={language} />
              </>
            }
          />

          <Route
            path="/projects/:id"
            element={<ProjectDetails language={language} />}
          />
        </Routes>

        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;
