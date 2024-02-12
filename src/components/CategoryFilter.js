import React from 'react';
import './CategoryFilter.css'; 

function CategoryFilter({ onCategoryChange })
{
  const handleCategoryChange = (e) =>
  {
    onCategoryChange(e.target.value);
  };

  return (
    <div className="category-filter">
      <select onChange={handleCategoryChange} defaultValue="">
        <option value="" disabled>Filter by category</option>
        <option value="all">All</option>
        <option value="news">News</option>
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
        {/*TODO: Add more categories */}
      </select>
    </div>
  );
}

export default CategoryFilter;
