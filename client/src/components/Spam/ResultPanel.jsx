import React from 'react';

const ResultPanel = ({ result, threatLevel, setFeedbackOpen, exportResults }) => {
  const getResultColors = () => {
    if (result?.isSpam) {
      return {
        bg: 'bg-gradient-to-br from-red-50 to-red-100',
        border: 'border-red-200',
        text: 'text-red-700',
      };
    } else {
      return {
        bg: 'bg-gradient-to-br from-green-50 to-green-100',
        border: 'border-green-200',
        text: 'text-green-700',
      };
    }
  };

  const resultColors = getResultColors();

  return (
    <div className={`${resultColors.bg} border ${resultColors.border} rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl`}>
      <div className="flex items-center mb-6">
        <div className={`h-12 w-12 rounded-full ${result.isSpam ? 'bg-red-100' : 'bg-green-100'} flex items-center justify-center mr-4`}>
          {result.isSpam ? (
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div>
          <h2 className={`text-2xl font-bold ${resultColors.text}`}>
            {result.isSpam ? 'SPAM DETECTED' : 'LEGITIMATE EMAIL'}
          </h2>
          <div className="flex items-center mt-1">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${threatLevel.bgColor} ${threatLevel.textColor} border ${threatLevel.borderColor}`}>
              {threatLevel.level} RISK
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Confidence: <strong>{result.confidence}%</strong></span>
          <span>Score: <strong>{result.spamScore}%</strong></span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${threatLevel.color} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${result.spamScore}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span className="text-green-600">Safe</span>
          <span className="text-yellow-600">Suspicious</span>
          <span className="text-red-600">High Risk</span>
        </div>
      </div>

      {result.indicators.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <span className="text-lg mr-2">🚨</span>
            <h3 className="font-semibold text-gray-800">
              Threat Indicators ({result.indicators.length} found):
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {result.indicators.map((indicator, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-xs font-medium flex items-center"
              >
                <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {indicator}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setFeedbackOpen(true)}
          className="px-4 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Provide Feedback
        </button>
        <button
          onClick={exportResults}
          className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export Results
        </button>
      </div>
    </div>
  );
};

export default ResultPanel;