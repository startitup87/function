const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const functionPath = path.join(__dirname, '../functions');

fs.readdirSync(functionPath).forEach(file => {
      if (file.endsWith('.js')) {
            const route = '/' + file.replace('.js', '');
                const fn = require(path.join(functionPath, file));
                    router.post(route, fn);
      }
});

module.exports = router;
