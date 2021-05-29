import React from 'react';

const Categories = ({categories, filterCategories}) => {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button type='button' className='filter-btn' key={i} onClick={() => filterCategories(category)}>{category}</button>
        )
      })}
    </div>
  )
};

export default Categories;
