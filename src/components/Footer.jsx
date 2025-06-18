
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">🧾 USTaxSlip</h3>
          <p className="text-gray-300 italic">"Tax tools for every American 💼"</p>
        </div>
        
        <div className="border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-400">
            Built with 💙 for taxpayers | © 2024 USTaxSlip
          </p>
          <p className="text-xs text-gray-500 mt-2">
            *Tax calculations are estimates. Consult a tax professional for accurate advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
