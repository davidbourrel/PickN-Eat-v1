const Burger = require('../models/burgers');
const BURGER_CATEGORY = require('../_constants/category');
const crypto = require('crypto');

const newId = crypto.randomBytes(15).toString('hex');

const getAllBurgers = async (req, res) => {
  try {
    const [burgers] = await Burger.getAll();
    res.status(200).json(burgers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBurger = async (req, res) => {
  try {
    const { id } = req.params;
    const [[burger]] = await Burger.getOne(id);
    res.status(200).json(burger);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBurger = async (req, res) => {
  try {
    const { id } = req.params;
    await Burger.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBurger = async (req, res) => {
  try {
    const { body } = req;
    const [[burger]] = await Burger.createOne({
      id: newId,
      categories_id: BURGER_CATEGORY,
      ...body,
    });
    res.status(201).json(burger);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBurgers,
  deleteBurger,
  createBurger,
  getBurger,
};
