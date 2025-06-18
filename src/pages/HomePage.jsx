
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const taxFacts = [
    "💡 Florida has no state income tax!",
    "🎯 Alaska has no state sales tax!",
    "🏆 New Hampshire has neither income nor sales tax!",
    "📊 California has the highest state income tax at 13.3%",
    "🛍️ Tennessee has the highest state sales tax at 7%",
    "💰 Seven states have no state income tax at all",
    "🎪 Five states have no state sales tax",
    "📈 Income tax brackets vary widely by state",
    "🏪 Local sales taxes can add significant costs"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => 
        prevIndex === taxFacts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [taxFacts.length]);

  return (
    <div className="page-container">
      <div className="container">
        <div className="hero-section fade-in">
          <h1 className="hero-title">
            USTaxSlip – Know Your Deductions 💸
          </h1>
          
          <p className="hero-subtitle">
            Estimate your state-wise income or sales tax easily. Calculate tax deductions for all 50 U.S. states with our comprehensive tax calculator. Get instant results for income tax and sales tax calculations.
          </p>

          <Link 
            to="/calculator"
            className="btn btn-primary btn-large"
          >
            🚀 Start Calculator
          </Link>
        </div>

        {/* Rotating Tax Facts */}
        <div className="fact-card fade-in">
          <h3 className="fact-title">💡 Did You Know?</h3>
          <p className="fact-text">
            {taxFacts[currentFactIndex]}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 mt-8">
          <div className="card fade-in">
            <div className="text-center">
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>🗺️</div>
              <h3 className="text-gray-800 mb-4">All 50 States</h3>
              <p className="text-gray-600">
                Complete tax data for every U.S. state, including income tax rates and sales tax percentages.
              </p>
            </div>
          </div>

          <div className="card fade-in">
            <div className="text-center">
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>⚡</div>
              <h3 className="text-gray-800 mb-4">Instant Results</h3>
              <p className="text-gray-600">
                Get immediate tax calculations with detailed breakdowns and receipt-style summaries.
              </p>
            </div>
          </div>

          <div className="card fade-in">
            <div className="text-center">
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>📄</div>
              <h3 className="text-gray-800 mb-4">Export & Print</h3>
              <p className="text-gray-600">
                Download your tax calculations as PDF or print them directly for your records.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="card mt-8" style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: 'white'}}>
          <h3 className="text-center mb-8" style={{fontSize: '2rem', fontWeight: '700'}}>Quick Tax Stats</h3>
          <div className="grid grid-cols-4 text-center">
            <div>
              <div style={{fontSize: '2rem', fontWeight: '700'}}>50</div>
              <div style={{color: '#bfdbfe'}}>States Covered</div>
            </div>
            <div>
              <div style={{fontSize: '2rem', fontWeight: '700'}}>7</div>
              <div style={{color: '#bfdbfe'}}>No Income Tax</div>
            </div>
            <div>
              <div style={{fontSize: '2rem', fontWeight: '700'}}>5</div>
              <div style={{color: '#bfdbfe'}}>No Sales Tax</div>
            </div>
            <div>
              <div style={{fontSize: '2rem', fontWeight: '700'}}>13.3%</div>
              <div style={{color: '#bfdbfe'}}>Highest Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
