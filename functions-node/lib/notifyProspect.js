const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
                user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
        }
});

module.exports = async function notifyProspect(invoice) {
      await transporter.sendMail({
            from: invoice.from,
                to: invoice.to,
                    subject: 'Your Consultation Has Been Approved',
                        html: `
                              <p>Your request has been approved.</p>
                                    <p><strong>Service:</strong> ${invoice.description}</p>
                                          <p><strong>Notes:</strong> ${invoice.notes}</p>
                                                <p>We’ll be in touch shortly to confirm scheduling.</p>
                                                    `
      });
};
