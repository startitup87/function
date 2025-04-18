const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
                user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
        }
});

module.exports = async (req, res) => {
      const { clientEmail, clientName, resourcesUrl } = req.body;

        await transporter.sendMail({
                from: process.env.SMTP_USER,
                    to: clientEmail,
                        subject: `Welcome, ${clientName}!`,
                            html: `
                                  <p>We're excited to work with you, ${clientName}.</p>
                                        <p>Here’s your onboarding toolkit: <a href="${resourcesUrl}">Start Here</a></p>
                                            `
        });

          res.json({ success: true, message: 'Welcome sequence sent.' });
};
