const User = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json(users[0]);
  } catch (error) {
    console.log('users ', error);
    res.status(500).send('An error occured while retrieving users');
  }
};

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

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    await User.findEmail(email);
    const createdUser = await User.createOne(req.body);
    res.status(201).json(createdUser[0]);
  } catch (error) {
    console.log('users ', error);
    res.status(500).send('An error occured while creating user');
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await User.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log('users ', error);
    res.status(500).send('An error occured while updating user');
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
  createUser,
  getUser,
  updateUser,
};
