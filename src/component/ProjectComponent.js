import React from "react";

function ProjectComponent() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        {/* Add your project components here */}
        <div className="project-box">
          <div className="project-icon">
            <i className="fas fa-birthday-cake"></i> {/* Placeholder icon */}
          </div>
          <div className="project-info">
            <h3>Occasion Reminder</h3>
            <p>
              Developed an Angular web application allowing users to set custom
              reminders (e.g., birthdays, meetings) with SMS and email
              notifications through API integration. Leveraged MySQL for
              seamless data storage and retrieval, ensuring optimal performance.
              User-friendly interface and responsive design for enhanced
              accessibility.
            </p>
          </div>
        </div>
        <div className="project-box">
          <div className="project-icon">
            <i className="fas fa-money-check-alt"></i> {/* Placeholder icon */}
          </div>
          <div className="project-info">
            <h3>ATM Stimulator</h3>
            <p>
              The ATM Stimulator System is a software-based tool designed to
              simulate ATM (Automated Teller Machine) operations in a controlled
              environment in JAVA. This system provides a safe and efficient way
              to test, analyze, and improve various aspects of ATM functionality
              without the need for physical ATMs or access to a live banking
              network. This report aims to provide an overview of the ATM
              Stimulator System, its key features, benefits, and potential
              applications.
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
              We will create a Java Project entitled “Hotel Management System”.
              It is a hotel software solutions that keep operations flowing. It
              is built in Java programming language with the help of NetBeans
              IDE. It can be used to manage activities like storing customer
              details, employee details, rooms information, booking rooms of two
              different types and checkout functionalities etc.
            </p>
          </div>
        </div>
        {/* Add more project boxes as needed */}
      </div>
    </section>
  );
}

export default ProjectComponent;
