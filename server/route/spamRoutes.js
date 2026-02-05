const router = require("express").Router();

router.post("/detect", (req, res) => {
  const { emailContent, emailSubject, sender } = req.body;

  const spamWords = [
    "win", "free", "prize", "money", "click", "urgent", "urgent", "immediately", "act now", "final notice", "payment", "bank", "account", "invoice", "login"];

  let score = 0;
  let found = [];

  spamWords.forEach(w => {
    if (emailContent.toLowerCase().includes(w)) {
      score++;
      found.push(w);
    }
  });

  const isSpam = score >= 2;

  res.json({
    success: true,
    data: {
      isSpam,
      spamScore: Math.min(score * 20, 100),
      confidence: isSpam ? 90 : 85,
      indicators: found,
      details: {
        sender,
        subject: emailSubject,
        contentPreview: emailContent.substring(0, 100)
      }
    }
  });
});

router.get("/stats", (req, res) => {
  res.json({
    success: true,
    data: {
      totalChecks: 120,
      accuracy: 94,
      spamDetected: 70,
      hamDetected: 50,
      commonSpamWords: ["win", "free", "prize", "click", "urgent", "urgent", "immediately", "act now", "final notice", "payment", "bank", "account", "invoice", "login"],
      lastUpdated: new Date()
    }
  });
});

router.post("/feedback", (req, res) => {
  res.json({ success: true, message: "Feedback received. Thank you!" });
});

module.exports = router;
