
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaxCalculatorPage = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [taxType, setTaxType] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStatesData();
  }, []);

  const fetchStatesData = async () => {
    try {
      const response = await fetch('/us_state_tax_data.json');
      if (!response.ok) {
        throw new Error('Failed to load tax data');
      }
      const data = await response.json();
      setStates(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load tax data. Please try again.');
      setLoading(false);
      console.error('Error loading tax data:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedState || !taxType || !amount) {
      setError('Please fill in all fields');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const stateData = states.find(state => state.State === selectedState);
    
    let taxRate = 0;
    let applicableTax = '';
    
    if (taxType === 'income') {
      taxRate = parseFloat(stateData['Income Tax Rate']) || 0;
      applicableTax = stateData['Income Tax'];
    } else {
      taxRate = parseFloat(stateData['Sales Tax Rate']) || 0;
      applicableTax = stateData['Sales Tax'];
    }

    const taxDeducted = (numAmount * taxRate) / 100;
    const netAmount = numAmount - taxDeducted;

    const calculationData = {
      state: selectedState,
      taxType: taxType === 'income' ? 'Income Tax' : 'Sales Tax',
      inputAmount: numAmount,
      appliedTaxRate: taxRate,
      applicableTax: applicableTax,
      taxDeducted: taxDeducted,
      netAmount: netAmount,
      notes: stateData.Notes
    };

    navigate('/tax-slip', { state: calculationData });
  };

  const getAvailableTaxTypes = () => {
    if (!selectedState) return [];
    
    const stateData = states.find(state => state.State === selectedState);
    if (!stateData) return [];
    
    const types = [];
    
    if (stateData['Income Tax'] !== 'No' && parseFloat(stateData['Income Tax Rate']) > 0) {
      types.push({ value: 'income', label: `Income Tax (${stateData['Income Tax Rate']}%)` });
    }
    
    if (parseFloat(stateData['Sales Tax Rate']) > 0) {
      types.push({ value: 'sales', label: `Sales Tax (${stateData['Sales Tax Rate']}%)` });
    }
    
    return types;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tax data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🧮 Tax Calculator
            </h1>
            <p className="text-gray-600 text-lg">
              Calculate your tax deductions for any U.S. state
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* State Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🗺️ Select State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setTaxType('');
                    setError('');
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Choose a state...</option>
                  {states.map((state) => (
                    <option key={state.State} value={state.State}>
                      {state.State}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tax Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📊 Tax Type
                </label>
                <select
                  value={taxType}
                  onChange={(e) => {
                    setTaxType(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  disabled={!selectedState}
                >
                  <option value="">Choose tax type...</option>
                  {getAvailableTaxTypes().map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {selectedState && getAvailableTaxTypes().length === 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    No taxes available for this state
                  </p>
                )}
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💰 Amount ($)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter amount to calculate tax"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🧾 Calculate My Deduction
              </button>
            </form>

            {/* Selected State Info */}
            {selectedState && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">
                  📍 {selectedState} Tax Information
                </h3>
                {(() => {
                  const stateData = states.find(state => state.State === selectedState);
                  return (
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• Income Tax: {stateData['Income Tax']}</p>
                      <p>• Sales Tax: {stateData['Sales Tax']}</p>
                      {stateData.Notes && <p>• Notes: {stateData.Notes}</p>}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculatorPage;
