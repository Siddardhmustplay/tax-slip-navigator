
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            USTaxSlip – Know Your Deductions 💸
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Calculate tax deductions for all 50 U.S. states with our comprehensive tax calculator. 
            Get instant results for income tax and sales tax calculations.
          </p>

          <Link 
            to="/calculator"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 Start Calculator
          </Link>
        </div>

        {/* Rotating Tax Facts */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Did You Know?</h3>
            <p className="text-2xl font-bold text-blue-600 animate-fade-in">
              {taxFacts[currentFactIndex]}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">All 50 States</h3>
            <p className="text-gray-600">
              Complete tax data for every U.S. state, including income tax rates and sales tax percentages.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Results</h3>
            <p className="text-gray-600">
              Get immediate tax calculations with detailed breakdowns and receipt-style summaries.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Export & Print</h3>
            <p className="text-gray-600">
              Download your tax calculations as PDF or print them directly for your records.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Tax Stats</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">50</div>
              <div className="text-blue-100">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">7</div>
              <div className="text-blue-100">No Income Tax</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-blue-100">No Sales Tax</div>
            </div>
            <div>
              <div className="text-3xl font-bold">13.3%</div>
              <div className="text-blue-100">Highest Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
