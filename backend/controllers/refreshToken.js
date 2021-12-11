const User = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const retrieveUsers = await User.getAll();
  const foundUser = retrieveUsers[0].find(
    (person) => person.refreshToken === refreshToken
  );

  if (!foundUser) return res.sendStatus(403); //Forbidden
  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { id: foundUser.id, email: decoded.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '300s' }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
