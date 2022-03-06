const User = require('../models/users');

const signUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email or password is required.' });

  try {
    // check for duplicate user in the database
    const [retrieveUsers] = await User.getAll();
    const duplicate = retrieveUsers.find((person) => person.email === email);

    if (duplicate)
      return res.status(409).json({ message: 'This email is already used.' });

    await User.createOne(req.body);
    res.status(201).json({ success: 'New user created!' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { signUp };
