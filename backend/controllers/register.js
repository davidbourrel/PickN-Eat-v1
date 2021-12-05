const User = require('../models/users');

const handleNewUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Email and password are required.' });

  // check for duplicate user in the database
  const retrieveUsers = await User.getAll();
  const duplicate = retrieveUsers[0].find((person) => person.email === email);

  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    const createdUser = await User.createOne(req.body);
    res.status(201).json(createdUser[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
