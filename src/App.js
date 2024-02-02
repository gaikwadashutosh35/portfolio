/* eslint-disable jsx-a11y/alt-text */
// src/App.js
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Scroll event listener to trigger section transitions
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App dark-theme">
      <header>
        <h1>ASHUTOSH GAIKWAD</h1>
        <ul className="contact-info">
          <li>
            <a href="mailto:gaikwadashutosh35@gmail.com" data-tooltip="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashutosh-gaikwad-aa7335194/"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gaikwadashutosh35"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Uz1BLN4wNEjKzz2MSwSHYWhDcCSBFHUC/view?usp=sharing"
              download
              // title="Download Resume"
              data-tooltip="Resume"
            >
              <i className="fas fa-file-download"></i>
            </a>
          </li>
        </ul>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Experienced Software Engineer</h2>
            <p>Skilled in Java, Python, Web Development</p>
            <a href="#about">Learn More</a>
          </div>
          <div className="languages-graph">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=gaikwadashutosh35&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false"
              height="150"
              alt="languages graph"
            />
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Experienced Software Engineer with 1.5 years of expertise in
              developing high-quality software solutions. Skilled in programming
              languages, databases, and web development, with a proven ability
              to work independently and collaboratively as part of a team.
            </p>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill java">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
            </div>
            <div className="skill python">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            </div>
            <div className="skill cpp">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            </div>
            <div className="skill sap">
              <img src="" />
              <p>SAP</p>
            </div>
            <div className="skill html">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <p>HTML</p>
            </div>
            <div className="skill css">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <p>CSS</p>
            </div>
            <div className="skill javascript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            </div>
            <div className="skill react">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            </div>
            <div className="skill angular">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
              <p>Angular</p>
            </div>
            <div className="skill sql">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            </div>
            <div className="skill mongodb">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            </div>
            <div className="skill azure">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" />
            </div>
            <div className="skill restapi">
              <img src="https://drive.google.com/file/d/1jV6s1NSRqlx1qnkGmiPM6Ourl5AZzLQL/view?usp=sharing" />
              <p>RestAPI</p>
            </div>
            <div className="skill salesforce">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" />
            </div>
            {/* Add more skills with respective classes */}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="experience-content">
            <h2>Experience & Education</h2>
            <div className="experience-item">
              <div className="experience-year">2022 - Present</div>
              <div className="experience-details">
                <h3>Technical Service Trainee | Fujitsu</h3>
                <p>Pune, India</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-year">2017 - 2021</div>
              <div className="experience-details">
                <h3>
                  Bachelor of Engineering | Pune Institute of Computer
                  Technology
                </h3>
                <p>Pune, India</p>
                <p>CGPA: 8.01</p>
              </div>
            </div>
            {/* Add more experience and education items as needed */}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="projects-content">
            <h2>Projects</h2>
            <div className="project-box">
              <div className="project-icon">
                <i className="fas fa-birthday-cake"></i>{" "}
                {/* Placeholder icon */}
              </div>
              <div className="project-info">
                <h3>Occasion Reminder</h3>
                <p>
                  Developed an Angular web application allowing users to set
                  custom reminders (e.g., birthdays, meetings) with SMS and
                  email notifications through API integration. Leveraged MySQL
                  for seamless data storage and retrieval, ensuring optimal
                  performance. User-friendly interface and responsive design for
                  enhanced accessibility.
                </p>
              </div>
            </div>
            <div className="project-box">
              <div className="project-icon">
                <i className="fas fa-money-check-alt"></i>{" "}
                {/* Placeholder icon */}
              </div>
              <div className="project-info">
                <h3>ATM Stimulator</h3>
                <p>
                  The ATM Stimulator System is a software-based tool designed to
                  simulate ATM (Automated Teller Machine) operations in a
                  controlled environment in JAVA. This system provides a safe
                  and efficient way to test, analyze, and improve various
                  aspects of ATM functionality without the need for physical
                  ATMs or access to a live banking network. This report aims to
                  provide an overview of the ATM Stimulator System, its key
                  features, benefits, and potential applications.
                </p>
              </div>
            </div>
            <div className="project-box">
              <div className="project-icon">
                <i className="fas fa-hotel"></i> {/* Hotel icon */}
              </div>
              <div className="project-info">
                <h3>Hotel Management System</h3>
                <p>
                  We will create a Java Project entitled “Hotel Management
                  System”. It is a hotel software solutions that keep operations
                  flowing. It is built in Java programming language with the
                  help of NetBeans IDE. It can be used to manage activities like
                  storing customer details, employee details, rooms information,
                  booking rooms of two different types and checkout
                  functionalities etc.
                </p>
              </div>
            </div>
            {/* Add more project boxes as needed */}
          </div>
        </section>
      </main>
      <footer>
        <p>© 2023 Ashutosh Gaikwad. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
