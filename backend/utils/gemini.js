const axios = require("axios");

async function generateSummary(text) {
  if (!text) {
    throw new Error("Text is required");
  }

  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  const prompt = `Summarize the following text into 5 bullet points:\n\n${text}`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    }
  );

  const summary =
    response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  return summary;
}

module.exports = { generateSummary };