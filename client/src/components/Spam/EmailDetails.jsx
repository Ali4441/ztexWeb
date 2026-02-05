import React from 'react';

const EmailDetails = ({ result, handleCopyToClipboard }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center mb-6">
        <div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-600 flex items-center justify-center mr-4">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800">📧 Email Details</h3>
      </div>

      <div className="space-y-4">
        <DetailItem
          label="From"
          value={result.details.sender}
          onCopy={() => handleCopyToClipboard(result.details.sender)}
        />

        <DetailItem
          label="Subject"
          value={result.details.subject || '(No subject)'}
        />

        <DetailItem
          label="Content Preview"
          value={`"${result.details.contentPreview}"`}
          isPreview={true}
        />
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, onCopy, isPreview = false }) => (
  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
    <p className="text-sm text-gray-600 mb-1 font-medium">{label}:</p>
    <div className="flex items-center justify-between">
      <p className={`${isPreview ? 'text-gray-600 italic' : 'text-gray-800 font-medium'} truncate`}>
        {value}
      </p>
      {onCopy && (
        <button
          onClick={onCopy}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors ml-2 shrink-0"
          title="Copy"
        >
          <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      )}
    </div>
  </div>
);

export default EmailDetails;