
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="container">
        <div className="header-nav">
          <Link to="/" className="header-logo">
            🧾 USTaxSlip
          </Link>
          
          <div className="header-links">
            <Link 
              to="/" 
              className={`header-link ${isActive('/') ? 'active' : ''}`}
            >
              🏠 Home
            </Link>
            <Link 
              to="/calculator" 
              className={`header-link ${isActive('/calculator') ? 'active' : ''}`}
            >
              🧮 Calculator
            </Link>
            <Link 
              to="/about" 
              className={`header-link ${isActive('/about') ? 'active' : ''}`}
            >
              ℹ️ About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
