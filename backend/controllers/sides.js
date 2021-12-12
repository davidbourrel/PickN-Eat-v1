const Side = require('../models/sides');

const getAllSides = async (req, res) => {
  try {
    const [sides] = await Side.getAll();
    res.status(200).json(sides);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving sides');
  }
};

const getSide = async (req, res) => {
  try {
    const { id } = req.params;
    const [[side]] = await Side.getOne(id);
    res.status(200).json(side);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving side infos');
  }
};

const deleteSide = async (req, res) => {
  try {
    const { id } = req.params;
    await Side.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting side');
  }
};

module.exports = {
  getAllSides,
  deleteSide,
  getSide,
};
