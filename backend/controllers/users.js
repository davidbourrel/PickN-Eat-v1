const User = require('../models/users');

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [[user]] = await User.getOne(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await User.updateOne(id, body);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  deleteUser,
  getUser,
  updateUser,
};
