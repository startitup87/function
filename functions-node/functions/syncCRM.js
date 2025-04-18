const axios = require('axios');

module.exports = async (req, res) => {
      const { name, email, project } = req.body;

        // Simulate CRM sync – swap with real API call to Airtable/Notion/HubSpot
          console.log(`Syncing lead: ${name} (${email}) with project: ${project.title}`);

            res.json({ success: true, message: 'CRM updated' });
};
