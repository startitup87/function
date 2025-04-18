module.exports = async (req, res) => {
      const { clientEmail, consultantEmail, dateTime, service } = req.body;

        // In production, integrate Google Calendar or Outlook Graph API here

          const meetingLink = `https://meet.example.com/${Math.random().toString(36).substring(2, 10)}`;

            res.json({
                    success: true,
                        message: 'Meeting scheduled',
                            meetingDetails: {
                                      service,
                                            dateTime,
                                                  meetingLink,
                                                        attendees: [consultantEmail, clientEmail]
                            }
            });
};
