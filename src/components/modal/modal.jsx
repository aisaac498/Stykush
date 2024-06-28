import React, { useState } from "react";
import "../../styles/modal.css";

function Modal({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={src} alt={alt} className="modal-image" />
      </div>
    </div>
  );
}

export default Modal;
