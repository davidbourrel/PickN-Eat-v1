const Drink = require('../models/drinks');

const getAllDrinks = async (req, res) => {
  try {
    const [drinks] = await Drink.getAll();
    res.status(200).json(drinks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const [[drink]] = await Drink.getOne(id);
    res.status(200).json(drink);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    await Drink.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDrinks,
  deleteDrink,
  getDrink,
};
