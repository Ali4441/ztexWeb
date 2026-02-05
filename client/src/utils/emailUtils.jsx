export const getThreatLevel = (score) => {
  if (score < 30) return { level: 'Low', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50', borderColor: 'border-green-200' };
  if (score < 60) return { level: 'Medium', color: 'bg-yellow-500', textColor: 'text-yellow-700', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' };
  if (score < 85) return { level: 'High', color: 'bg-orange-500', textColor: 'text-orange-700', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' };
  return { level: 'Critical', color: 'bg-red-500', textColor: 'text-red-700', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
};

export const loadSampleEmail = (type) => {
  const samples = {
    spam: {
      subject: '🎉 CONGRATULATIONS! You Won an iPhone 14 Pro! 🎉',
      content: `Congratulations! You've been selected to win a FREE iPhone 14 Pro!

Dear Valued Customer,

We are pleased to inform you that your email has been selected in our monthly lottery draw. You have won a brand new iPhone 14 Pro (256GB)!

To claim your prize, please click the link below and complete the verification form:
http://secure-winner-claim.com/iphone14-pro

⚠️ IMPORTANT: This offer expires in 24 hours!
⚠️ Limited to first 100 claimants only!

You will need to pay a small processing fee of $9.99 to cover shipping and handling.

Best regards,
Apple Prize Distribution Team
prizes@apple-giveaway.com`,
      sender: 'notifications@apple-giveaways.com'
    },
    ham: {
      subject: 'Project Update: Website Redesign v2.0',
      content: `Hi Team,

Following up on our discussion yesterday, here's the updated project timeline:

Project: Website Redesign v2.0
Deadline: March 15, 2024
Status: On Track

Key Updates:
1. Homepage design finalized 
2. User authentication implemented 
3. Payment gateway integration in progress
4. Mobile responsive testing scheduled for next week

Please review the attached documents:
- Project_Timeline.pdf
- Design_Mockups.zip
- Technical_Specifications.docx

Our next sync meeting is scheduled for Friday at 2:00 PM in Conference Room B.

Best regards,
Sarah Johnson
Project Lead
sarah.j@company.com`,
      sender: 'sarah.johnson@company.com'
    }
  };

  return samples[type] || samples.ham;
};

export const exportResults = (result, emailSubject, sender, emailContent, setSnackbar) => {
  if (!result) return;

  const exportData = {
    analysisDate: new Date().toISOString(),
    emailDetails: {
      subject: emailSubject,
      sender: sender,
      preview: emailContent.substring(0, 200)
    },
    detectionResults: result,
    settings: {
      modelVersion: "1.2.0",
      analysisMethod: "AI-Powered Classification"
    }
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  const exportFileDefaultName = `spam-analysis-${Date.now()}.json`;

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();

  setSnackbar({
    open: true,
    message: 'Results exported successfully!',
    severity: 'success'
  });
};