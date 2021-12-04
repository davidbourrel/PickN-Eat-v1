const User = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  const foundUser = await User.getAll();
  const filteredUser = foundUser[0].find((person) => person.email === email);

  if (!filteredUser) return res.sendStatus(401); //Unauthorized
  // evaluate password

  const match = await User.verifyPassword(
    password,
    filteredUser.hashedPassword
  );
  if (match) {
    // create JWTs
    const accessToken = jwt.sign(
      { email: filteredUser.email, roles_id: filteredUser.roles_id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '300s' }
    );
    const refreshToken = jwt.sign(
      { email: filteredUser.email, roles_id: filteredUser.roles_id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    // Saving refreshToken with current user
    await User.updateOne(filteredUser.id, {
      ...filteredUser,
      refreshToken: refreshToken,
    });
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      // maxAge = 1 day
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.getAll();
  const filteredUser = foundUser[0].find(
    (person) => person.refreshToken === refreshToken
  );

  if (!filteredUser) return res.sendStatus(403); //Forbidden
  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || filteredUser.email !== decoded.email) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { email: decoded.email, roles_id: filteredUser.roles_id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleLogin, handleRefreshToken };
