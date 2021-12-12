const Salad = require('../models/salads');

const getAllSalads = async (req, res) => {
  try {
    const [salads] = await Salad.getAll();
    res.status(200).json(salads);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getSalad = async (req, res) => {
  try {
    const { id } = req.params;
    const [[salad]] = await Salad.getOne(id);
    res.status(200).json(salad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteSalad = async (req, res) => {
  try {
    const { id } = req.params;
    await Salad.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllSalads,
  deleteSalad,
  getSalad,
};
