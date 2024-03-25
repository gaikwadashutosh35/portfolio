// src/components/ExperienceSection.js
import React from "react";

function ExperienceComponent() {
  return (
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
            <h3>Bachelor of Engineering | Pune Institute of Computer Technology</h3>
            <p>Pune, India</p>
            <p>CGPA: 8.01</p>
          </div>
        </div>
        {/* Add more experience and education items as needed */}
      </div>
    </section>
  );
}

export default ExperienceComponent;
