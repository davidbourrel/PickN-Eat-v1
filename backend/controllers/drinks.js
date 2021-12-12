const Drink = require('../models/drinks');

const getAllDrinks = async (req, res) => {
  try {
    const [drinks] = await Drink.getAll();
    res.status(200).json(drinks);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving drinks');
  }
};

const getDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const [[drink]] = await Drink.getOne(id);
    res.status(200).json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving drink infos');
  }
};

const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    await Drink.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting drink');
  }
};

module.exports = {
  getAllDrinks,
  deleteDrink,
  getDrink,
};
