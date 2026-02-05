import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import StatsOverview from './StatsOverview';
import EmailForm from './EmailForm';
import ResultPanel from './ResultPanel';
import EmailDetails from './EmailDetails';
import AboutSection from './AboutSection';
import FeedbackModal from './FeedbackModal';
import SnackbarAlert from './SnackbarAlert';
import { getThreatLevel, exportResults as exportData, loadSampleEmail } from '../../utils/emailUtils';

const SpamDetector = () => {
  const [emailContent, setEmailContent] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [sender, setSender] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState(null);
  const [, setLoadingStats] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackLabel, setFeedbackLabel] = useState('ham');
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

  useEffect(() => {
    loadStats();
  },);

  const handleDetectSpam = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/spam/detect`, {
        emailContent,
        emailSubject,
        sender
      });

      if (response.data.success) {
        setResult(response.data.data);
      } else {
        setError(response.data.message || 'Detection failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to detect spam');
      console.error('Detection error:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    setLoadingStats(true);
    try {
      const response = await axios.get(`${API_URL}/spam/stats`);
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
    } finally {
      setLoadingStats(false);
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!result) return;

    setFeedbackLoading(true);
    try {
      const response = await axios.post(`${API_URL}/spam/feedback`, {
        emailContent,
        actualLabel: feedbackLabel
      });

      if (response.data.success) {
        setSnackbar({
          open: true,
          message: response.data.message,
          severity: 'success'
        });
        setFeedbackOpen(false);
        loadStats();
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data?.message || 'Feedback submission failed',
        severity: 'error'
      });
    } finally {
      setFeedbackLoading(false);
    }
  };

  const handleReset = () => {
    setEmailContent('');
    setEmailSubject('');
    setSender('');
    setResult(null);
    setError('');
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbar({
        open: true,
        message: 'Copied to clipboard!',
        severity: 'success'
      });
    });
  };

  const loadSample = (type) => {
    const { subject, content, sender } = loadSampleEmail(type);
    setEmailSubject(subject);
    setEmailContent(content);
    setSender(sender);
    setResult(null);
  };

  const exportResults = () => {
    if (!result) return;
    exportData(result, emailSubject, sender, emailContent, setSnackbar);
  };

  const threatLevel = result ? getThreatLevel(result.spamScore) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        {stats && <StatsOverview stats={stats} />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <EmailForm
              sender={sender}
              setSender={setSender}
              emailSubject={emailSubject}
              setEmailSubject={setEmailSubject}
              emailContent={emailContent}
              setEmailContent={setEmailContent}
              handleDetectSpam={handleDetectSpam}
              handleReset={handleReset}
              loadSample={loadSample}
              loading={loading}
              error={error}
              setError={setError}
            />
          </div>

          <div className="lg:col-span-1">
            {result ? (
              <div className="space-y-6 animate-fade-in">
                <ResultPanel
                  result={result}
                  threatLevel={threatLevel}
                  setFeedbackOpen={setFeedbackOpen}
                  exportResults={exportResults}
                />
                <EmailDetails
                  result={result}
                  handleCopyToClipboard={handleCopyToClipboard}
                />
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>

        <AboutSection />

        <FeedbackModal
          feedbackOpen={feedbackOpen}
          setFeedbackOpen={setFeedbackOpen}
          feedbackLabel={feedbackLabel}
          setFeedbackLabel={setFeedbackLabel}
          handleFeedbackSubmit={handleFeedbackSubmit}
          feedbackLoading={feedbackLoading}
        />

        <SnackbarAlert
          snackbar={snackbar}
          setSnackbar={setSnackbar}
        />
      </div>
    </div>
  );
};

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

export default SpamDetector;