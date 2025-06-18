
import React from 'react';

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="about-container">
          {/* Header */}
          <div className="about-header">
            <h1 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px'}}>
              ℹ️ About USTaxSlip
            </h1>
            <p style={{fontSize: '1.25rem', color: '#6b7280'}}>
              Understanding U.S. taxes made simple
            </p>
          </div>

          {/* Tax Explanation */}
          <div className="about-cards">
            <div className="about-card">
              <h2 className="about-card-title" style={{color: '#2563eb'}}>
                💼 Income Tax
              </h2>
              <p className="about-card-content mb-4">
                Income tax is a tax imposed on individuals or entities based on their income or profits. 
                In the United States, income tax rates vary by state, with some states having no income tax at all.
              </p>
              <ul className="about-card-content" style={{paddingLeft: '20px'}}>
                <li>Applied to wages, salaries, and business income</li>
                <li>Rates can be flat or progressive</li>
                <li>7 states have no state income tax</li>
                <li>Federal income tax applies nationwide</li>
              </ul>
            </div>

            <div className="about-card">
              <h2 className="about-card-title" style={{color: '#7c3aed'}}>
                🛍️ Sales Tax
              </h2>
              <p className="about-card-content mb-4">
                Sales tax is a consumption tax imposed by the government on the sale of goods and services. 
                It's typically added to the purchase price at the point of sale.
              </p>
              <ul className="about-card-content" style={{paddingLeft: '20px'}}>
                <li>Applied to most retail purchases</li>
                <li>Collected by businesses and remitted to the state</li>
                <li>5 states have no state sales tax</li>
                <li>Local taxes may apply on top of state rates</li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="about-section">
            <div className="card">
              <h2 style={{fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '24px', textAlign: 'center'}}>
                🎯 Who Can Use USTaxSlip?
              </h2>
              
              <div className="use-cases">
                <div className="use-case use-case-freelancer">
                  <div className="use-case-icon">💻</div>
                  <h3 className="use-case-title">Freelancers</h3>
                  <p className="use-case-description">
                    Calculate income tax obligations when working across different states 
                    or planning where to establish residency.
                  </p>
                </div>

                <div className="use-case use-case-shopper">
                  <div className="use-case-icon">🛒</div>
                  <h3 className="use-case-title">Online Shoppers</h3>
                  <p className="use-case-description">
                    Understand sales tax implications when purchasing from different states 
                    or planning major purchases.
                  </p>
                </div>

                <div className="use-case use-case-traveler">
                  <div className="use-case-icon">✈️</div>
                  <h3 className="use-case-title">Travelers</h3>
                  <p className="use-case-description">
                    Compare tax costs when considering relocation or planning 
                    tax-efficient travel and purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="resources-section">
            <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '24px', textAlign: 'center'}}>
              📚 Helpful Resources
            </h2>
            
            <div className="resources-grid">
              <a 
                href="https://www.irs.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resource-link"
              >
                <h3 style={{fontWeight: '600', marginBottom: '8px'}}>🏛️ IRS Official Website</h3>
                <p style={{fontSize: '0.875rem', color: '#bfdbfe'}}>
                  Get official tax information, forms, and guidance from the Internal Revenue Service.
                </p>
              </a>

              <a 
                href="https://smartasset.com/taxes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resource-link"
              >
                <h3 style={{fontWeight: '600', marginBottom: '8px'}}>📊 SmartAsset Tax Guide</h3>
                <p style={{fontSize: '0.875rem', color: '#bfdbfe'}}>
                  Comprehensive tax calculators and state-by-state tax information.
                </p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="disclaimer">
            <h3 className="disclaimer-title">⚠️ Important Disclaimer</h3>
            <p className="disclaimer-text">
              USTaxSlip provides tax estimates for educational purposes only. Tax laws are complex and change frequently. 
              Always consult with a qualified tax professional for accurate tax advice specific to your situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
