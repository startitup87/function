const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
                user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
        }
});

module.exports = async function notifyClient(invoice) {
      await transporter.sendMail({
            from: process.env.SMTP_USER,
                to: invoice.from,
                    subject: 'New Invoice Drafted for Approval',
                        html: `
                              <h2>New Consult Request</h2>
                                    <p><strong>Service:</strong> ${invoice.description}</p>
                                          <p><strong>Urgency:</strong> ${invoice.urgency}</p>
                                                <p><strong>Price:</strong> $${invoice.price}</p>
                                                      <p>Review and approve to notify the client.</p>
                                                          `
      });
};
