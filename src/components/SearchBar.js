// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Importing the CSS for styling

function SearchBar({ onSearch })
{
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
