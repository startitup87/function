const { Configuration, OpenAIApi } = require('openai');

module.exports = async (req, res) => {
      const { name, message } = req.body;

        const openai = new OpenAIApi(
                new Configuration({ apiKey: process.env.OPENAI_API_KEY })
        );

          const prompt = `Classify this lead message:
          Name: ${name}
          Message: ${message}
          Respond with: "spam", "low-quality", or "qualified"`;

            try {
                    const completion = await openai.createChatCompletion({
                              model: 'gpt-4',
                                    messages: [{ role: 'user', content: prompt }]
                    });

                        const decision = completion.data.choices[0].message.content.trim();
                            res.json({ decision });
            } catch (err) {
                    console.error(err);
                        res.status(500).json({ error: 'AI classification failed.' });
            }
};
