const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET = process.env.JWT_SECRET || 'secret123';

exports.generateToken = (user) => jwt.sign(user, SECRET, { expiresIn: '7d' });

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Missing token');
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch (e) {
    res.status(403).send('Invalid token');
  }
};
