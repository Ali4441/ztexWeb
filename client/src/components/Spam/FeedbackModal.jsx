import React from 'react';

const FeedbackModal = ({
  feedbackOpen,
  setFeedbackOpen,
  feedbackLabel,
  setFeedbackLabel,
  handleFeedbackSubmit,
  feedbackLoading
}) => {
  if (!feedbackOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Improve Our Detection System</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Your feedback helps us improve the accuracy of our spam detection algorithms.
          </p>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              What was the actual nature of this email?
            </label>
            <div className="space-y-4">
              <RadioOption
                value="ham"
                label="Legitimate Email (Ham)"
                description="Safe, legitimate communication"
                checked={feedbackLabel === 'ham'}
                onChange={(e) => setFeedbackLabel(e.target.value)}
                color="green"
              />
              <RadioOption
                value="spam"
                label="Spam Email"
                description="Unsolicited or malicious content"
                checked={feedbackLabel === 'spam'}
                onChange={(e) => setFeedbackLabel(e.target.value)}
                color="red"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setFeedbackOpen(false)}
              className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-200 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleFeedbackSubmit}
              disabled={feedbackLoading}
              className={`px-6 py-3 font-medium rounded-xl transition-all transform hover:-translate-y-0.5 ${feedbackLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}
            >
              {feedbackLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </div>
              ) : (
                'Submit Feedback'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RadioOption = ({ value, label, description, checked, onChange, color }) => (
  <label className="flex items-center p-4 border border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
    <input
      type="radio"
      name="feedback"
      value={value}
      checked={checked}
      onChange={onChange}
      className={`h-5 w-5 text-${color}-600 focus:ring-${color}-500`}
    />
    <div className="ml-4">
      <span className="font-medium text-gray-800">{label}</span>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  </label>
);

export default FeedbackModal;