const express = require('express');
const router = express.Router();
const languageTool = require('languagetool-api');

// POST /api/nlp/check-grammar
router.post('/check-grammar', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  languageTool.check({
    language: 'en-US',
    text: text
  }, (err, result) => {
    if (err) {
      console.error('LanguageTool error:', err);
      return res.status(500).json({ error: 'Grammar check failed' });
    }
    res.json({ matches: result.matches });
    
  });
});

module.exports = router;
