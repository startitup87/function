const fs = require('fs');
const path = require('path');
const notifyProspect = require('../lib/notifyProspect');

module.exports = async (req, res) => {
      try {
            const { invoiceId } = req.body;
                const filePath = path.join(__dirname, '../data/invoices.json');
                    const invoices = JSON.parse(fs.readFileSync(filePath));

                        const invoice = invoices.find(inv => inv.id === invoiceId);
                            if (!invoice) return res.status(404).json({ error: 'Invoice not found' });

                                invoice.status = 'approved';
                                    fs.writeFileSync(filePath, JSON.stringify(invoices, null, 2));
                                        await notifyProspect(invoice);

                                            res.json({ success: true, message: 'Invoice approved and prospect notified.' });
      } catch (err) {
            console.error(err);
                res.status(500).json({ error: 'Approval process failed.' });
      }
};
