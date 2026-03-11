const axios = require('axios');

/**
 * Send text to the Google Gemini API and retrieve a summary.
 * @param {string} text - The text to summarize.
 * @returns {Promise<string>} The summary returned by the model.
 */
async function generateSummary(text) {
  if (!text) {
    throw new Error('Text is required');
  }
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  const prompt = `Summarize the following text into 5 clear bullet points for studying.\n\n${text}`;

  const response = await axios.post(
    process.env.GEMINI_ENDPOINT || 'https://api.openai.com/v1/chat/completions',
    {
      model: process.env.GEMINI_MODEL || 'gemini-1.0',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      },
    }
  );

  const summary =
    response.data?.choices?.[0]?.message?.content || response.data?.choices?.[0]?.text || '';

  return summary;
}

module.exports = {
  generateSummary,
};
