import React from "react";

function SkillsComponent() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill java">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="skill angular">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            alt=""
          />
          <p>Angular</p>
        </div>
        <div className="skill react">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="skill cpp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt=""
          />
        </div>
        <div className="skill javascript">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            alt=""
          />
          <p>Javascript</p>
        </div>

        <div className="skill html">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt=""
          />
          <p>HTML</p>
        </div>
        <div className="skill css">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt=""
          />
          <p>CSS</p>
        </div>

        <div className="skill python">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="skill graphQL">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
            alt="GraphQL"
          />
        </div>
        <div className="skill sql">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="skill mongodb">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="skill azure">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="skill restapi">
          <img src="https://cdn.svgapi.com/vector/10073/api-page.svg" alt="" />
          
        </div>
        <div className="skill salesforce">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
            alt="Salesforce"
          />
        </div>
        <div className="skill sap">
          <div className="sap-logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
