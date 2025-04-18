const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
      new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

module.exports = async function aiProcessor(data) {
      const prompt = `Analyze this consult request and return JSON with:
        - serviceType
          - urgencyLevel
            - estimatedCost
              - specialNotes

                Request:
                  ${JSON.stringify(data)}`;

                    const response = await openai.createChatCompletion({
                            model: 'gpt-4',
                                messages: [{ role: 'user', content: prompt }]
                    });

                      return JSON.parse(response.data.choices[0].message.content.trim());
};
