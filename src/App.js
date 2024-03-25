import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import AboutComponent from "./component/AboutComponent";
import SkillsComponent from "./component/SkillsComponent";
import ExperienceComponent from "./component/ExperienceComponent";
import ProjectComponent from "./component/ProjectComponent";
import { Link, Element } from "react-scroll";

function App() {
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let prevSection = null;
    
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
    
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          prevSection = currentSection;
          setCurrentSection(section.getAttribute("id"));
        }
      });
    
      // Add transition class to previous section if it exists
      if (prevSection && document.getElementById(prevSection)) {
        document.getElementById(prevSection).classList.remove("show");
      }
    
      // Add show class to current section if it exists
      if (document.getElementById(currentSection)) {
        document.getElementById(currentSection).classList.add("show");
      }
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="App dark-theme">
      <Header />
      <main>
        <Element name="hero">
          <Hero id="hero" />
        </Element>
        <Element name="about">
          <AboutComponent id="about" />
        </Element>
        <Element name="skills">
          <SkillsComponent id="skills" />
        </Element>
        <Element name="experience">
          <ExperienceComponent id="experience" />
        </Element>
        <Element name="projects">
          <ProjectComponent id="projects" />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
