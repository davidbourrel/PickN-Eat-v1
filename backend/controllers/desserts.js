const Dessert = require('../models/desserts');

const getAllDesserts = async (req, res) => {
  try {
    const desserts = await Dessert.getAll();
    res.status(200).json(desserts[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving desserts');
  }
};

const getDessert = async (req, res) => {
  try {
    const { id } = req.params;
    const [dessert] = await Dessert.getOne(id);
    res.status(200).json(dessert[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving dessert infos');
  }
};

const deleteDessert = async (req, res) => {
  try {
    const { id } = req.params;
    await Dessert.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting dessert');
  }
};

const createDessert = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Dessert.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating dessert');
  }
};

const updateDessert = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Dessert.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating dessert');
  }
};

module.exports = {
  getAllDesserts,
  deleteDessert,
  createDessert,
  getDessert,
  updateDessert,
};
