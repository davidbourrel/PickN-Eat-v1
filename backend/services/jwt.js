const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const JWT_KEY = process.env.JWT_KEY;

const createToken = (payload) => {
  const token = jwt.sign(
    {
      data: payload,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    JWT_KEY
  );
  return token;
};

const authWithJwt = expressJwt({
  secret: JWT_KEY,
  algorithms: ['HS256'],
});

const cookieJwtAuth = (req, res, next) => {
  const { token } = req.cookies;
  try {
    const user = jwt.verify(token, JWT_KEY);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie('token');
  }
};

module.exports = { createToken, authWithJwt, cookieJwtAuth };
