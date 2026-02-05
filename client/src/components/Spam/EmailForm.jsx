import React from 'react';
import SampleButtons from './SampleButtons';

const EmailForm = ({
  sender,
  setSender,
  emailSubject,
  setEmailSubject,
  emailContent,
  setEmailContent,
  handleDetectSpam,
  handleReset,
  loadSample,
  loading,
  error,
  setError
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="h-10 w-10 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Email Analysis Panel</h2>
          <div className="ml-auto relative group">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-64 p-4 bg-gray-900 text-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <p className="text-sm">Analyze email content for spam indicators using our AI-powered detection system</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleDetectSpam}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Sender Email Address
                </div>
              </label>
              <input
                type="email"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="e.g., sender@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Subject
              </label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Enter email subject line"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Content
              </label>
              <div className="relative">
                <textarea
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Paste the full email content here for analysis..."
                  rows="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none transition-all pr-12 text-gray-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setEmailContent('')}
                  className="absolute right-3 top-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Clear content"
                >
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center mb-6">
              <span className="text-sm font-medium text-gray-500 bg-gray-50 px-4 py-1 rounded-full">QUICK ACTIONS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="submit"
                disabled={loading || !emailContent.trim()}
                className={`px-6 py-4 rounded-xl font-semibold text-white transition-all transform hover:-translate-y-0.5 ${loading || !emailContent.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  }`}
              >
                <div className="flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Analyze for Spam
                    </>
                  )}
                </div>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                Clear All Fields
              </button>
            </div>
          </div>

          <SampleButtons loadSample={loadSample} />
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-shake">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-700 font-medium">{error}</span>
              </div>
              <button
                onClick={() => setError('')}
                className="text-red-500 hover:text-red-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailForm;