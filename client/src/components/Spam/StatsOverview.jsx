import React from 'react';

const StatsOverview = ({ stats }) => {
  const statCards = [
    { label: 'Total Analyses', value: stats.totalChecks.toLocaleString(), icon: '📊', gradient: 'from-indigo-500 to-purple-600' },
    { label: 'Accuracy Rate', value: `${stats.accuracy}%`, icon: '📈', gradient: 'from-emerald-500 to-green-600' },
    { label: 'Threats Blocked', value: stats.spamDetected.toLocaleString(), icon: '🛡️', gradient: 'from-amber-500 to-orange-600' },
    { label: 'Safe Emails', value: stats.hamDetected.toLocaleString(), icon: '✅', gradient: 'from-violet-500 to-purple-400' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-slide-down">
      {statCards.map((stat, index) => (
        <div key={index} className={`bg-linear-to-br ${stat.gradient} rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300`}>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-white/90 text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;