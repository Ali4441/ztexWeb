import React from 'react';

const SampleButtons = ({ loadSample }) => {
  return (
    <div className="mt-8">
      <p className="text-sm font-semibold text-gray-600 mb-4">Try Sample Emails:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => loadSample('spam')}
          className="px-6 py-3 border-2 border-red-200 rounded-xl font-medium text-red-700 bg-red-50 hover:bg-red-100 hover:border-red-300 transition-all flex items-center justify-center"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Load Spam Example
        </button>
        <button
          type="button"
          onClick={() => loadSample('ham')}
          className="px-6 py-3 border-2 border-green-200 rounded-xl font-medium text-green-700 bg-green-50 hover:bg-green-100 hover:border-green-300 transition-all flex items-center justify-center"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Load Legitimate Example
        </button>
      </div>
    </div>
  );
};

export default SampleButtons;