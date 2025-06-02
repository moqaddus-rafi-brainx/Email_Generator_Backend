const OpenAI = require('openai');
const {
  generateEmailFromOpenAI,
  resetMessages,
} = require('../services/openaiService');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let messages = [
  {
    role: 'system',
    content: 'You are a helpful assistant that writes professional emails.',
  },
];

const generateEmail = async (req, res) => {
  const { prompt,type,tone } = req.body;
  
  try {
    const reply = await generateEmailFromOpenAI({ prompt, type, tone });
    res.json({ email: reply });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error generating email');
  }
};

// POST /reset
const resetConversation = (req, res) => {
  resetMessages();
  res.send('Conversation reset');
};

module.exports = {
  generateEmail,
  resetConversation,
};
