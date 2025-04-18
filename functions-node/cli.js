const fs = require('fs');
const path = require('path');

const name = process.argv[2];
if (!name) {
  console.error("Usage: node cli.js <functionName>");
  process.exit(1);
}

const template = `module.exports = async (req, res) => {
  res.json({ success: true, message: '${name} works!' });
};`;

const functionsDir = path.join(__dirname, 'functions');
const filePath = path.join(functionsDir, `${name}.js`);

if (!fs.existsSync(functionsDir)) {
  fs.mkdirSync(functionsDir);
}

fs.writeFileSync(filePath, template);
console.log(`Created: functions/${name}.js`);
