module.exports = async (req, res) => {
      const { projectId, templateName } = req.body;

        const tasks = [
                'Kickoff Meeting',
                    'Requirements Gathering',
                        'Design Phase',
                            'Development',
                                'QA Testing',
                                    'Client Review'
        ];

          console.log(`Template "${templateName}" assigned to project ${projectId}.`);

            res.json({
                    success: true,
                        template: templateName,
                            tasks
            });
};
