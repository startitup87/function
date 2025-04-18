module.exports = async (req, res) => {
      const { clientEmail, intakeFormLink } = req.body;

        // This could later use SendGrid, Resend, or an internal database
          console.log(`Sending intake form to: ${clientEmail}`);

            res.json({
                    success: true,
                        message: `Intake form sent to ${clientEmail}`,
                            intakeForm: intakeFormLink || "https://yourdomain.com/intake"
            });
};
