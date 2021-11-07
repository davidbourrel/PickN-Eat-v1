const Drink = require('../models/drinks');

const getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.getAll();
    res.status(200).json(drinks[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving drinks');
  }
};

const getDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const [drink] = await Drink.getOne(id);
    res.status(200).json(drink[0]);
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

const createDrink = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Drink.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating drink');
  }
};

const updateDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Drink.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating drink');
  }
};

module.exports = {
  getAllDrinks,
  deleteDrink,
  createDrink,
  getDrink,
  updateDrink,
};
