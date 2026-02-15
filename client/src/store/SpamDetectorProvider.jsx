import React, { createContext, useState } from 'react';
import axios from 'axios';
import { getThreatLevel, exportResults as exportData, loadSampleEmail } from '/src/utils/emailUtils.jsx';

const SpamDetectorContext = createContext();

export const SpamDetectorProvider = ({ children }) => {
  const [emailContent, setEmailContent] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [sender, setSender] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackLabel, setFeedbackLabel] = useState('ham');
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const API_URL = import.meta.env.VITE_API_URL;

  const detectSpam = async (e) => {
    e?.preventDefault?.();
    setLoading(true);
    setError('');

    if (!emailContent || emailContent.trim() === '') {
      setError('Email content is required');
      setLoading(false);
      return;
    }

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

  const submitFeedback = async () => {
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

  const resetForm = () => {
    setEmailContent('');
    setEmailSubject('');
    setSender('');
    setResult(null);
    setError('');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbar({
        open: true,
        message: 'Copied to clipboard!',
        severity: 'success'
      });
    });
  };

  const loadSample = (type) => {
    const { subject, content, sender: sampleSender } = loadSampleEmail(type);
    setEmailSubject(subject);
    setEmailContent(content);
    setSender(sampleSender);
    setResult(null);
  };

  const exportResults = () => {
    if (!result) return;
    exportData(result, emailSubject, sender, emailContent, setSnackbar);
  };

  const threatLevel = result ? getThreatLevel(result.spamScore) : null;

  const contextValue = {
    // State
    emailContent,
    emailSubject,
    sender,
    result,
    loading,
    error,
    stats,
    loadingStats,
    feedbackOpen,
    feedbackLabel,
    feedbackLoading,
    snackbar,
    threatLevel,

    // Setters
    setEmailContent,
    setEmailSubject,
    setSender,
    setResult,
    setError,
    setFeedbackOpen,
    setFeedbackLabel,
    setSnackbar,

    // Functions
    detectSpam,
    loadStats,
    submitFeedback,
    resetForm,
    copyToClipboard,
    loadSample,
    exportResults,
  };

  return (
    <SpamDetectorContext.Provider value={contextValue}>
      {children}
    </SpamDetectorContext.Provider>
  );
};

