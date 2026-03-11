const { generateSummary } = require('../utils/gemini');
const Summary = require('../models/Summary');

exports.createSummary = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Text is required' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ message: 'Gemini API key not configured' });
  }

  try {
    // generate the summary using helper
    const summaryText = await generateSummary(text);

    const summary = await Summary.create({
      userId: req.user.id,
      originalText: text,
      summaryText,
    });

    res.json({ summary: summaryText });
  } catch (err) {
    console.error('Gemini error', err.response?.data || err.message);
    res.status(500).json({ message: 'Failed to summarize text' });
  }
};

exports.getSummaries = async (req, res) => {
  try {
    const summaries = await Summary.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
    });
    res.json({ summaries });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
