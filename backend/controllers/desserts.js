const Dessert = require('../models/desserts');

const getAllDesserts = async (req, res) => {
  try {
    const [desserts] = await Dessert.getAll();
    res.status(200).json(desserts);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving desserts');
  }
};

const getDessert = async (req, res) => {
  try {
    const { id } = req.params;
    const [[dessert]] = await Dessert.getOne(id);
    res.status(200).json(dessert);
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

module.exports = {
  getAllDesserts,
  deleteDessert,
  getDessert,
};
