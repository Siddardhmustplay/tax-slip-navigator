
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ℹ️ About USTaxSlip
            </h1>
            <p className="text-xl text-gray-600">
              Understanding U.S. taxes made simple
            </p>
          </div>

          {/* Tax Explanation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                💼 Income Tax
              </h2>
              <p className="text-gray-700 mb-4">
                Income tax is a tax imposed on individuals or entities based on their income or profits. 
                In the United States, income tax rates vary by state, with some states having no income tax at all.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Applied to wages, salaries, and business income</li>
                <li>• Rates can be flat or progressive</li>
                <li>• 7 states have no state income tax</li>
                <li>• Federal income tax applies nationwide</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                🛍️ Sales Tax
              </h2>
              <p className="text-gray-700 mb-4">
                Sales tax is a consumption tax imposed by the government on the sale of goods and services. 
                It's typically added to the purchase price at the point of sale.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Applied to most retail purchases</li>
                <li>• Collected by businesses and remitted to the state</li>
                <li>• 5 states have no state sales tax</li>
                <li>• Local taxes may apply on top of state rates</li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🎯 Who Can Use USTaxSlip?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold text-gray-800 mb-2">Freelancers</h3>
                <p className="text-gray-600 text-sm">
                  Calculate income tax obligations when working across different states 
                  or planning where to establish residency.
                </p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="font-semibold text-gray-800 mb-2">Online Shoppers</h3>
                <p className="text-gray-600 text-sm">
                  Understand sales tax implications when purchasing from different states 
                  or planning major purchases.
                </p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-800 mb-2">Travelers</h3>
                <p className="text-gray-600 text-sm">
                  Compare tax costs when considering relocation or planning 
                  tax-efficient travel and purchases.
                </p>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              📚 Helpful Resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://www.irs.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-300 text-center"
              >
                <h3 className="font-semibold mb-2">🏛️ IRS Official Website</h3>
                <p className="text-blue-100 text-sm">
                  Get official tax information, forms, and guidance from the Internal Revenue Service.
                </p>
              </a>

              <a 
                href="https://smartasset.com/taxes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-300 text-center"
              >
                <h3 className="font-semibold mb-2">📊 SmartAsset Tax Guide</h3>
                <p className="text-blue-100 text-sm">
                  Comprehensive tax calculators and state-by-state tax information.
                </p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Disclaimer</h3>
            <p className="text-yellow-700 text-sm">
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
