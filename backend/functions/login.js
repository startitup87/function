const { generateToken } = require('../lib/auth');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  // Replace with DB check
  if (email === 'demo@crafted.dev' && password === 'password') {
    const token = generateToken({ email });
    return res.json({ token });
  }
  res.status(401).send('Invalid login');
};
