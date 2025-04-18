const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
      new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

module.exports = async (req, res) => {
      const { projectDetails } = req.body;

        const prompt = `
        Break this project into 5–7 clear tasks with deliverables:
        ${projectDetails}
        `;

          try {
                const result = await openai.createChatCompletion({
                          model: 'gpt-4',
                                messages: [{ role: 'user', content: prompt }]
                });

                    const tasks = result.data.choices[0].message.content.trim();
                        res.json({ success: true, tasks });
          } catch (err) {
                console.error(err);
                    res.status(500).json({ error: 'Scope analysis failed.' });
          }
};
