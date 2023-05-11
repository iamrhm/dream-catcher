const fetch = require('node-fetch');

const apiKey = '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';
const text = 'I love using OpenAI!';

fetch('https://api.openai.com/v1/engines/davinci-codex/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    prompt: `Sentiment analysis of "${text}" as sad, angry, happy, or neutral`,
    model: 'text-davinci-002',
    temperature: 0.5,
    max_tokens: 1,
    top_p: 1.0,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: '\n'
  })
})
.then(res => res.json())
.then(data => {
  const sentiment = data.choices[0].text.toLowerCase().trim();
  console.log(`The sentiment of "${text}" is: ${sentiment}`);
})
.catch(err => console.error(err));
