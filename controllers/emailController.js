const {
  generateEmailFromOpenAI,
  resetMessages
} = require('../services/openaiService');


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
