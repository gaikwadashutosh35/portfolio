import React from "react";

const ResumeModal = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {/* Embedded PDF Viewer */}
        <iframe
          src={pdfUrl}
          width="600"
          height="625"
          allow="autoplay"
          title="Resume Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeModal;
