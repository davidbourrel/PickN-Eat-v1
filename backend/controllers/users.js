const User = require('../models/users');

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [user] = await User.getOne(id);
    res.status(200).json(user[0]);
  } catch (error) {
    console.log('users ', error);
    res.status(500).send('An error occured while retrieving user infos');
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log('users ', error);
    res.status(500).send('An error occured while deleting user');
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await User.updateOne(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log('users ', error);
    res.status(500).send('An error occured while updating user');
  }
};

module.exports = {
  deleteUser,
  getUser,
  updateUser,
};
