// pages/api/recommendations.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // Make sure this is set correctly in .env.local
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { income, expenses, goal } = req.body;

    try {
      // Construct the prompt for GPT
      const prompt = `
        I have the following financial information:
        - Income: ${income}
        - Expenses: ${expenses}
        - Goal: ${goal}

        Based on this, provide recommendations for better budgeting, saving, or investment opportunities.
      `;

      // Request a response from GPT
      const response = await openai.createCompletion({
        model: 'text-davinci-003',  // You can use another model if desired
        prompt: prompt,
        max_tokens: 150,
      });

      const recommendations = response.data.choices[0].text.trim().split('\n');
      res.status(200).json(recommendations);
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      res.status(500).json({ error: 'Failed to generate recommendations' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed for non-POST requests
  }
}