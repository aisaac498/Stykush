import React, { useState } from 'react';
import '../../styles/collapsible.css';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button onClick={toggleOpen} className="collapsible-header">
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default Collapsible;
