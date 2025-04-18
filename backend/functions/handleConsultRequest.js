const aiProcessor = require('../lib/aiProcessor');
const buildInvoice = require('../lib/invoiceBuilder');
const notifyClient = require('../lib/notifyClient');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
      try {
            const consultData = req.body;
                const aiResult = await aiProcessor(consultData);
                    const invoice = buildInvoice(consultData, aiResult);

                        const invoicesPath = path.join(__dirname, '../data/invoices.json');
                            const invoices = JSON.parse(fs.readFileSync(invoicesPath));
                                invoices.push(invoice);
                                    fs.writeFileSync(invoicesPath, JSON.stringify(invoices, null, 2));

                                        await notifyClient(invoice);
                                            res.json({ success: true, invoice });
      } catch (err) {
            console.error(err);
                res.status(500).json({ error: 'Consult processing failed.' });
      }
};
