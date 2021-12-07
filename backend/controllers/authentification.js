const User = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MILLISECONDS_PER_DAY } = require('./const');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Email and password are required.' });
  const retrieveUsers = await User.getAll();
  const foundUser = retrieveUsers[0].find((person) => person.email === email);

  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password

  const match = await User.verifyPassword(password, foundUser.hashedPassword);
  if (match) {
    // create JWTs
    const token = jwt.sign(
      { email: foundUser.email, id: foundUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '300s' }
    );
    const refreshToken = jwt.sign(
      { email: foundUser.email, id: foundUser.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // Saving refreshToken with current user
    await User.updateOne(foundUser.id, {
      ...foundUser,
      refreshToken: refreshToken,
    });
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: MILLISECONDS_PER_DAY,
    });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
