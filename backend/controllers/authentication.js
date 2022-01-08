const User = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Email and password are required.' });
      
  const [retrieveUsers] = await User.getAll();
  const foundUser = retrieveUsers.find((person) => person.email === email);

  if (!foundUser) return res.sendStatus(401); //Unauthorized

  const match = await User.verifyPassword(password, foundUser.hashedPassword);
  if (match) {
    // create JWTs
    const token = jwt.sign(
      { id: foundUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
