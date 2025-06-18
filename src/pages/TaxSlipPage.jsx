
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TaxSlipPage = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Data Available</h2>
          <p className="text-gray-600 mb-6">Please use the calculator to generate a tax slip.</p>
          <Link 
            to="/calculator"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Calculator
          </Link>
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
    // Simple implementation - in a real app, you'd use a library like jsPDF
    alert('PDF download feature would be implemented with a library like jsPDF in a production app!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Receipt Card */}
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden print:shadow-none">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
              <h1 className="text-2xl font-bold mb-2">🧾 USTaxSlip</h1>
              <p className="text-blue-100">Tax Calculation Receipt</p>
            </div>

            {/* Receipt Content */}
            <div className="p-8 space-y-6">
              {/* Slip Details */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div>
                    <p><strong>Slip ID:</strong> {slipId}</p>
                    <p><strong>Generated:</strong> {timestamp}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">OFFICIAL</p>
                  </div>
                </div>
              </div>

              {/* Calculation Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">State</p>
                    <p className="font-semibold text-lg">{data.state}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tax Type</p>
                    <p className="font-semibold text-lg">{data.taxType}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Input Amount:</span>
                      <span className="font-semibold">${data.inputAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applied Tax Rate:</span>
                      <span className="font-semibold">{data.appliedTaxRate}%</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between text-red-600">
                        <span className="font-medium">Tax Deducted:</span>
                        <span className="font-bold">-${data.taxDeducted.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <div className="flex justify-between text-green-600 text-lg">
                        <span className="font-bold">Net Final Amount:</span>
                        <span className="font-bold">${data.netAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Information */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Tax Details</h3>
                  <p className="text-sm text-blue-700 mb-1">
                    <strong>{data.state} {data.taxType}:</strong> {data.applicableTax}
                  </p>
                  {data.notes && (
                    <p className="text-sm text-blue-600">
                      <strong>Note:</strong> {data.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 print:hidden">
                <button
                  onClick={handlePrint}
                  className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  🖨️ Print
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  ⬇️ Download PDF
                </button>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 pt-4 print:hidden">
                <Link
                  to="/calculator"
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-600 transition-colors"
                >
                  ← New Calculation
                </Link>
                <Link
                  to="/"
                  className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg text-center hover:bg-purple-600 transition-colors"
                >
                  🏠 Home
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 italic">
                "Built with 💙 for taxpayers"
              </p>
              <p className="text-xs text-gray-500 mt-1">
                *This is an estimate. Consult a tax professional for accurate advice.
              </p>
            </div>
          </div>

          {/* Summary Card */}
          <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center print:hidden">
            <h3 className="text-xl font-bold mb-2">🎉 Calculation Complete!</h3>
            <p className="text-lg">
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
