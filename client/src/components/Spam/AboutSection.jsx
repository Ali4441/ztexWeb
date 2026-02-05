import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-xl p-8 mb-10">
      <div className="flex items-center mb-8">
        <div className="h-12 w-12 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">About Our Spam Detection System</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <HowItWorks />
        <KeyFeatures />
      </div>

      <BestPractices />
    </div>
  );
};

const HowItWorks = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
        <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-800">How It Works</h3>
    </div>
    <p className="text-gray-600 mb-4">
      Our advanced spam detection system uses <strong className="text-indigo-600">machine learning algorithms</strong> trained on millions of email samples. It analyzes:
    </p>
    <ul className="space-y-2">
      {[
        "Content patterns and keyword frequencies",
        "Sender reputation and domain authenticity",
        "URL safety and link behavior patterns",
        "Language style and urgency indicators",
        "Header information and metadata analysis"
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const KeyFeatures = () => {
  const features = [
    { icon: '📊', title: "High Accuracy", desc: "94.5% detection rate with minimal false positives" },
    { icon: '⚡', title: "Real-time Analysis", desc: "Instant results with comprehensive threat assessment" },
    { icon: '🎯', title: "Learning System", desc: "Improves with user feedback and new patterns" },
    { icon: '🛡️', title: "Multi-layer Security", desc: "Multiple detection methods for comprehensive protection" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
          <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800">Key Features</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-4">{feature.icon}</span>
            <div>
              <h4 className="font-semibold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BestPractices = () => {
  const tips = [
    "Always verify sender email addresses before clicking links or downloading attachments",
    "Be cautious of emails requesting urgent action or sensitive information",
    "Check for spelling and grammar errors - professional organizations rarely make these mistakes",
    "Hover over links to see actual URLs before clicking",
    "Never provide passwords or financial information via email",
    "Use two-factor authentication for important accounts",
    "Regularly update your email client and security software",
    "Report suspicious emails to your IT department or email provider"
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center mb-6">
        <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center mr-4">
          <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800">📊 Best Practices for Email Security</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <svg className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;