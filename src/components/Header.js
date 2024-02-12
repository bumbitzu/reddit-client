// src/components/Header.js
import React from 'react';
import './Header.css'; // Importing the CSS for styling

function Header()
{
  return (
    <header className="app-header">
      <h1>Reddit Viewer</h1>
      {/* Navigation or additional links could be added here */}
    </header>
  );
}

export default Header;
