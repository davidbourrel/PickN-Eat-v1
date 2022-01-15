const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
  const { headers } = req;

  if (!headers.authorization) {
    return res.status(401).json({
      message: 'Missing Authorization header',
    });
  }

  const parts = headers.authorization.split(' ');
  if (parts.length !== 2) {
    return res.status(403).json({
      message: `Header format is Authorization: ${process.env.ACCESS_TOKEN_TYPE} token`,
    });
  }

  const tokenType = parts[0];
  const tokenContent = parts[1];

  if (
    process.env.ACCESS_TOKEN_TYPE.toLowerCase() !== tokenType.toLowerCase() ||
    !tokenContent
  ) {
    return res.status(403).json({
      message: `Header format is Authorization: ${process.env.ACCESS_TOKEN_TYPE} token`,
    });
  }

  jwt.verify(tokenContent, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ messages: `invalid token : ${err}` });
    }
    req.tokenContent = tokenContent;
    next();
  });
};

module.exports = verifyJWT;
