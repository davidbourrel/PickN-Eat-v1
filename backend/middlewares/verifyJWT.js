const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
  // Bearer token
  const authHeader = req.headers['authorization'];
  if (!authHeader)
    return res.status(401).json({
      message: 'Invalid token',
    });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    next();
  });
};

module.exports = verifyJWT;
