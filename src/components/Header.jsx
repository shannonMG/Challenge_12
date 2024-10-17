import React from 'react';
import Navigation from './Navigation'; // Adjust the path if necessary

function Header() {
    return (
      <header className="wrapper" >
        <div className="header-container">
          <h1>ShannonMG</h1>
          <Navigation />
        </div>
      </header>
    );
  }
  
export default Header;

