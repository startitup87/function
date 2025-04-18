module.exports = async (req, res) => {
      const { projectTitle, leadName, teamEmails } = req.body;

        // Extend this with Slack webhook or SendGrid
          console.log(`Team notified: New consult - ${projectTitle} from ${leadName}`);

            res.json({
                    success: true,
                        message: `Team notified for project "${projectTitle}"`,
                            notified: teamEmails || ["team@yourco.dev"]
            });
};
