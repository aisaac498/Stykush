import React from 'react';
import '../../styles/learning.css';

const CalligraphyResources = () => {
  return (
    <div className="resources">
      <div className="tools-software">
        <h2>Popular Calligraphy Tools and Software</h2>
        <ul>
          <li><a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">Adobe Illustrator</a></li>
          <li><a href="https://www.coreldraw.com/en/" target="_blank" rel="noopener noreferrer">CorelDRAW</a></li>
          <li><a href="https://procreate.art/" target="_blank" rel="noopener noreferrer">Procreate</a></li>
          <li><a href="https://affinity.serif.com/en-gb/designer/" target="_blank" rel="noopener noreferrer">Affinity Designer</a></li>
          <li><a href="https://www.wacom.com/en-us" target="_blank" rel="noopener noreferrer">Wacom Tablets</a></li>
        </ul>
      </div>
      <div className="practice-sheets">
        <h2>Download Practice Sheets and Templates</h2>
        <ul>
          <li><a href="https://www.freebiefindingmom.com/letters/free-printable-capital-modern-calligraphy-letters-modern-calligraphy-A.pdf" target="_blank" rel="noopener noreferrer">Basic Strokes</a></li>
          <li><a href="https://www.freebiefindingmom.com/letters/free-printable-capital-modern-calligraphy-letters-set.pdf" target="_blank" rel="noopener noreferrer">Alphabet Practice</a></li>
          <li><a href="https://www.freebiefindingmom.com/wp-content/uploads/2023/11/Printable-Cursive-Bubble-Letters-Set.pdf" target="_blank" rel="noopener noreferrer">Advanced Flourishes</a></li>
          <li>
            <details>
              <summary>More Practice Sheets</summary>
              <ul>
                <li><a href="https://www.freebiefindingmom.com/letters/Free-Printable-Gothic-Calligraphy-Letters-Set.pdf" target="_blank" rel="noopener noreferrer">Fancy Letters</a></li>
                <li><a href="https://freebiefindingmom.com/letters/free-printable-cursive-capital-letters-set.pdf" target="_blank" rel="noopener noreferrer">Cursive Practice</a></li>
                <li><a href="https://www.freebiefindingmom.com/wp-content/uploads/2022/05/Free-Printable-Beginner-Capital-C-Calligraphy-Practice-Sheet-PDF.pdf" target="_blank" rel="noopener noreferrer">Quotes Practice</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CalligraphyResources;
