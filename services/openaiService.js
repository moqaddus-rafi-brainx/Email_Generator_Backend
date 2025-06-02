const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let messages = [
  {
    role: 'system',
    content: 'You are a helpful assistant that writes emails.',
  },
];

const generateEmailFromOpenAI = async ({ prompt, type, tone }) => {
  const updateMessage = `Write a ${tone} ${type} email based on this: ${prompt}`;
  messages.push({ role: 'user', content: updateMessage });

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    temperature: 0.7,
  });

  const reply = response.choices[0].message.content;
  messages.push({ role: 'assistant', content: reply });

  return reply;
};

const resetMessages = () => {
  messages = [
    {
      role: 'system',
      content: 'You are a helpful assistant that writes emails.',
    },
  ];
};

module.exports = {
  generateEmailFromOpenAI,
  resetMessages,
};
