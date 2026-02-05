import React from 'react';

const SnackbarAlert = ({ snackbar, setSnackbar }) => {
  if (!snackbar.open) return null;

  const getIcon = () => {
    switch (snackbar.severity) {
      case 'success':
        return (
          <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="h-5 w-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getBgColor = () => {
    switch (snackbar.severity) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'error': return 'bg-red-50 border-red-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  const getTextColor = () => {
    switch (snackbar.severity) {
      case 'success': return 'text-green-800';
      case 'error': return 'text-red-800';
      default: return 'text-blue-800';
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 animate-slide-up ${getBgColor()} border rounded-xl shadow-lg p-4 max-w-sm`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {getIcon()}
          <span className={`font-medium ${getTextColor()}`}>
            {snackbar.message}
          </span>
        </div>
        <button
          onClick={() => setSnackbar({ ...snackbar, open: false })}
          className="ml-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SnackbarAlert;