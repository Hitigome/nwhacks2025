// pages/api/chatgpt.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../env.local' });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-2024-08-06', 
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error connecting to OpenAI API:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Failed to fetch data from OpenAI API' });
  }
}
