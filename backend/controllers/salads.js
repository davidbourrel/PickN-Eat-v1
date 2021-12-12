const Salad = require('../models/salads');

const getAllSalads = async (req, res) => {
  try {
    const [salads] = await Salad.getAll();
    res.status(200).json(salads);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving salads');
  }
};

const getSalad = async (req, res) => {
  try {
    const { id } = req.params;
    const [[salad]] = await Salad.getOne(id);
    res.status(200).json(salad);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving salad infos');
  }
};

const deleteSalad = async (req, res) => {
  try {
    const { id } = req.params;
    await Salad.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting salad');
  }
};

module.exports = {
  getAllSalads,
  deleteSalad,
  getSalad,
};
