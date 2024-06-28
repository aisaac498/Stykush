import React from 'react';
import '../../styles/categories.css';

const Categories = ({ setActiveCategory }) => {
    return (
      <section className="categories">
        <div className="category-list">
          <span 
            className="category-item category-item-beginner" 
            onClick={() => setActiveCategory('Beginners')}
          >
            Beginners
          </span>
          <span 
            className="category-item category-item-intermediate" 
            onClick={() => setActiveCategory('Intermediate')}
          >
            Intermediate
          </span>
          <span 
            className="category-item category-item-expert" 
            onClick={() => setActiveCategory('Expert')}
          >
            Expert
          </span>
        </div>
      </section>
    );
}

export default Categories;
