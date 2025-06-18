
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
      <div className="page-container">
        <div className="container">
          <div className="text-center">
            <div className="spinner"></div>
            <p className="text-gray-600">Loading tax data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="calculator-container">
          <div className="text-center mb-8">
            <h1 className="calculator-title">
              🧮 Tax Calculator
            </h1>
            <p className="calculator-subtitle">
              Calculate your tax deductions for any U.S. state
            </p>
          </div>

          <div className="card">
            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* State Selection */}
              <div className="form-group">
                <label className="form-label">
                  🗺️ Select State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setTaxType('');
                    setError('');
                  }}
                  className="form-select"
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
              <div className="form-group">
                <label className="form-label">
                  📊 Tax Type
                </label>
                <select
                  value={taxType}
                  onChange={(e) => {
                    setTaxType(e.target.value);
                    setError('');
                  }}
                  className="form-select"
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
                  <p className="mt-4 text-gray-600" style={{fontSize: '0.875rem'}}>
                    No taxes available for this state
                  </p>
                )}
              </div>

              {/* Amount Input */}
              <div className="form-group">
                <label className="form-label">
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
                  className="form-input"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-large"
                style={{width: '100%'}}
              >
                🧾 Calculate My Deduction
              </button>
            </form>

            {/* Selected State Info */}
            {selectedState && (
              <div className="state-info">
                <h3 className="state-info-title">
                  📍 {selectedState} Tax Information
                </h3>
                {(() => {
                  const stateData = states.find(state => state.State === selectedState);
                  return (
                    <div className="state-info-list">
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
