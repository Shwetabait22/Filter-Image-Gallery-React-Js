import React from 'react';

const Filter = ({ categories, onFilterChange, activeFilter }) => {
  return (
    <div className="filter">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onFilterChange(category)}
          className={category === activeFilter ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
