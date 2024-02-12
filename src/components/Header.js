import React from 'react';
import './Header.css'; 
import logo from '../logo.png';
function Header()
{
  return (
    <header className="app-header">
      <img src={logo} className='logo' alt="logo"/>
      <h1> Mini Reddit <span className='author'>by Bumbitzu</span></h1>
      {/*TODO Navigation or additional links could be added here */}
    </header>
  );
}

export default Header;
