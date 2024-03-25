// Header.js
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

function Header() {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
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
          <button onClick={togglePreview} data-tooltip="Resume">
            <i className="fas fa-file-download"></i>
          </button>
        </li>
      </ul>
      {showPreview && (
        <ResumeModal
          isOpen={showPreview}
          onClose={togglePreview}
          pdfUrl="https://drive.google.com/file/d/1ga4UaW4lXFaCbCI_LNJub-jpHZ5VQILI/preview"
        />
      )}
    </header>
  );
}

export default Header;
