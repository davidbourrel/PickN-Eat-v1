const User = require('../models/users');

const handleNewUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email or password is required.' });

  // check for duplicate user in the database
  const [retrieveUsers] = await User.getAll();
  const duplicate = retrieveUsers.find((person) => person.email === email);

  if (duplicate)
    return res.status(409).json({ message: 'This email is already used.' });

  try {
    const [createdUser] = await User.createOne(req.body);
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
