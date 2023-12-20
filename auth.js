const jwt = require('jsonwebtoken');
const config = require('./config');

function generateToken(user) {
  const payload = {
    userId: user._id,
    };

  const options = {
    expiresIn: '1h', 
  };

  return jwt.sign(payload, config.jwtSecret, options);
}

function verifyToken(req, res,next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
}

module.exports = {
  generateToken,
  verifyToken,
};