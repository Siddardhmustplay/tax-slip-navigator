
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TaxSlipPage = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="text-center">
            <h2 className="text-gray-800 mb-4" style={{fontSize: '2rem', fontWeight: '700'}}>No Data Available</h2>
            <p className="text-gray-600 mb-6">Please use the calculator to generate a tax slip.</p>
            <Link 
              to="/calculator"
              className="btn btn-primary"
            >
              Go to Calculator
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const slipId = uuidv4();
  const timestamp = new Date().toLocaleString();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    alert('PDF download feature would be implemented with a library like jsPDF in a production app!');
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="receipt-container">
          {/* Receipt Card */}
          <div className="card card-receipt" style={{padding: '0', margin: '0 auto'}}>
            {/* Header */}
            <div className="receipt-header">
              <h1 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '8px'}}>🧾 USTaxSlip</h1>
              <p style={{color: '#bfdbfe'}}>Tax Calculation Receipt</p>
            </div>

            {/* Receipt Content */}
            <div className="receipt-content">
              {/* Slip Details */}
              <div className="receipt-details">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280'}}>
                  <div>
                    <p><strong>Slip ID:</strong> {slipId}</p>
                    <p><strong>Generated:</strong> {timestamp}</p>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <p style={{fontSize: '1.125rem', fontWeight: '700', color: '#2563eb'}}>OFFICIAL</p>
                  </div>
                </div>
              </div>

              {/* Calculation Details */}
              <div>
                <div className="receipt-grid">
                  <div>
                    <p className="receipt-field">State</p>
                    <p className="receipt-value">{data.state}</p>
                  </div>
                  <div>
                    <p className="receipt-field">Tax Type</p>
                    <p className="receipt-value">{data.taxType}</p>
                  </div>
                </div>

                <div className="receipt-summary">
                  <div className="receipt-line">
                    <span className="text-gray-600">Input Amount:</span>
                    <span style={{fontWeight: '600'}}>${data.inputAmount.toFixed(2)}</span>
                  </div>
                  <div className="receipt-line">
                    <span className="text-gray-600">Applied Tax Rate:</span>
                    <span style={{fontWeight: '600'}}>{data.appliedTaxRate}%</span>
                  </div>
                  <div className="receipt-line" style={{borderTop: '1px solid #e5e7eb', paddingTop: '8px'}}>
                    <span className="text-red-600" style={{fontWeight: '500'}}>Tax Deducted:</span>
                    <span className="text-red-600" style={{fontWeight: '700'}}>-${data.taxDeducted.toFixed(2)}</span>
                  </div>
                  <div className="receipt-line receipt-total">
                    <span className="text-green-600" style={{fontWeight: '700'}}>Net Final Amount:</span>
                    <span className="text-green-600" style={{fontWeight: '700'}}>${data.netAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Tax Information */}
                <div className="alert alert-info">
                  <h3 style={{fontWeight: '600', color: '#1e40af', marginBottom: '8px'}}>Tax Details</h3>
                  <p style={{fontSize: '0.875rem', color: '#1d4ed8', marginBottom: '4px'}}>
                    <strong>{data.state} {data.taxType}:</strong> {data.applicableTax}
                  </p>
                  {data.notes && (
                    <p style={{fontSize: '0.875rem', color: '#1e40af'}}>
                      <strong>Note:</strong> {data.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="receipt-buttons" style={{display: 'none'}}>
                <button
                  onClick={handlePrint}
                  className="btn btn-success"
                  style={{flex: '1'}}
                >
                  🖨️ Print
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="btn btn-primary"
                  style={{flex: '1'}}
                >
                  ⬇️ Download PDF
                </button>
              </div>

              {/* Navigation */}
              <div className="receipt-buttons" style={{marginTop: '16px', display: 'none'}}>
                <Link
                  to="/calculator"
                  className="btn btn-secondary"
                  style={{flex: '1'}}
                >
                  ← New Calculation
                </Link>
                <Link
                  to="/"
                  className="btn btn-primary"
                  style={{flex: '1'}}
                >
                  🏠 Home
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="receipt-footer">
              <p style={{fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic'}}>
                "Built with 💙 to make taxes easier for everyone."
              </p>
              <p style={{fontSize: '0.75rem', color: '#4b5563', marginTop: '4px'}}>
                *This is an estimate. Consult a tax professional for accurate advice.
              </p>
            </div>
          </div>

          {/* Action Buttons - Outside receipt for screen only */}
          <div className="receipt-buttons mt-8">
            <button
              onClick={handlePrint}
              className="btn btn-success"
              style={{flex: '1'}}
            >
              🖨️ Print
            </button>
            <button
              onClick={handleDownloadPDF}
              className="btn btn-primary"
              style={{flex: '1'}}
            >
              ⬇️ Download PDF
            </button>
          </div>

          {/* Navigation - Outside receipt for screen only */}
          <div className="receipt-buttons mt-4">
            <Link
              to="/calculator"
              className="btn btn-secondary"
              style={{flex: '1'}}
            >
              ← New Calculation
            </Link>
            <Link
              to="/"
              className="btn btn-primary"
              style={{flex: '1'}}
            >
              🏠 Home
            </Link>
          </div>

          {/* Summary Card */}
          <div className="card mt-8 text-center" style={{background: 'linear-gradient(135deg, #10b981, #2563eb)', color: 'white'}}>
            <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px'}}>🎉 Calculation Complete!</h3>
            <p style={{fontSize: '1.125rem'}}>
              You saved ${data.taxDeducted.toFixed(2)} in {data.taxType.toLowerCase()} 
              {data.taxType === 'Sales Tax' ? ' costs' : ' obligations'} in {data.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxSlipPage;
