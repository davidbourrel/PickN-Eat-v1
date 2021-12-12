const Dessert = require('../models/desserts');

const getAllDesserts = async (req, res) => {
  try {
    const [desserts] = await Dessert.getAll();
    res.status(200).json(desserts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getDessert = async (req, res) => {
  try {
    const { id } = req.params;
    const [[dessert]] = await Dessert.getOne(id);
    res.status(200).json(dessert);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteDessert = async (req, res) => {
  try {
    const { id } = req.params;
    await Dessert.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllDesserts,
  deleteDessert,
  getDessert,
};
