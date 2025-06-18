
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-blue-500 to-purple-600">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🧾 USTaxSlip
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              🏠 Home
            </Link>
            <Link 
              to="/calculator" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/calculator') 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              🧮 Calculator
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
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
