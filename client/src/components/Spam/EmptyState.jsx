import React from 'react';

const EmptyState = () => (
  <div className="bg-linear-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center animate-pulse-slow">
    <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center mb-6">
      <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-600 mb-3">Ready for Analysis</h3>
    <p className="text-gray-500 mb-6 max-w-sm">
      Enter email content or use sample emails to begin AI-powered spam detection analysis
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">
        🤖 AI-Powered
      </span>
      <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">
        ⚡ Real-time
      </span>
      <span className="px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-sm font-medium">
        🔒 Secure
      </span>
    </div>
  </div>
);

export default EmptyState;