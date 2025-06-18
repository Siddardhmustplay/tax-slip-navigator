
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="mb-4">
            <h3 className="footer-title">🧾 USTaxSlip</h3>
            <p className="footer-subtitle">"Tax tools for every American 💼"</p>
          </div>
          
          <div className="footer-divider">
            <p className="footer-copyright">
              Built with 💙 for taxpayers | © 2024 USTaxSlip
            </p>
            <p className="footer-disclaimer">
              *Tax calculations are estimates. Consult a tax professional for accurate advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
