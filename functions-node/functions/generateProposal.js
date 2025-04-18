const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
      new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

module.exports = async (req, res) => {
      const { projectDescription, clientName, businessName } = req.body;

        const prompt = `
        Create a brief professional proposal (3 paragraphs max) for a freelance client.
        Tone: confident, clear, human
        Include:
        - intro greeting
        - summary of value
        - request for next steps

        Client: ${clientName}, Business: ${businessName}
        Project: ${projectDescription}
        `;

          try {
                const completion = await openai.createChatCompletion({
                          model: 'gpt-4',
                                messages: [{ role: 'user', content: prompt }]
                });

                    const proposal = completion.data.choices[0].message.content.trim();
                        res.json({ success: true, proposal });
          } catch (err) {
                console.error(err);
                    res.status(500).json({ error: 'Proposal generation failed.' });
          }
};
