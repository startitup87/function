module.exports = async (req, res) => {
      const { contactEmail, daysDelay = 3 } = req.body;

        const futureDate = new Date();
          futureDate.setDate(futureDate.getDate() + daysDelay);

            // In production, schedule job or trigger async worker
              console.log(`Reminder set for ${contactEmail} on ${futureDate.toISOString()}`);

                res.json({
                        success: true,
                            message: `Follow-up reminder scheduled for ${contactEmail}`,
                                followUpDate: futureDate.toISOString()
                });
};
