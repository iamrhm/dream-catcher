import { apiHandler } from './api';
import { sentiments } from '../utils';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export async function analyzeDream(dream) {
  const requestArgs = {
    method: 'POST',
    url: 'https://api.openai.com/v1/engines/davinci-codex/analyze',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: `Sentiment analysis of "${dream}" as ${sentiments.map(s => s.value).join(', ')}`,
      model: 'text-davinci-002',
      temperature: 0.5,
      max_tokens: 1,
      top_p: 1.0,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: '\n'
    })
  }
  const response = await apiHandler(requestArgs);
  const sentiment = response.json().text.toLowerCase().trim();
  return sentiment;
}

export function fetchDreamEmotion() {
  const emotionStats = [
    {value: 'positive', emoji: '😊', count: 4},
    {value: 'negative', emoji: '😔', count: 5},
    {value: 'neutral', emoji: '🤔', count: 7},
    {value: 'joyful', emoji: '🥰', count: 6},
    {value: 'sad', emoji: '😢', count: 3},
    {value: 'angry', emoji: '😡', count: 5},
    {value: 'fearful', emoji: '😰', count: 2}
  ];
  const maxDreamCount = emotionStats.reduce((prev, curr) => (prev < curr.count ? curr.count : prev), 0);

  const computedPercentage = emotionStats.map((stat) => ({
    ...stat, percentage: stat.count/(maxDreamCount + 2),
  }));
  return computedPercentage;
}