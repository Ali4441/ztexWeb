import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className="h-12 w-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Advanced Spam Detection
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        AI-powered email analysis with real-time threat assessment
      </p>
    </div>
  );
};

export default Header;