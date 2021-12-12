const Side = require('../models/sides');

const getAllSides = async (req, res) => {
  try {
    const [sides] = await Side.getAll();
    res.status(200).json(sides);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getSide = async (req, res) => {
  try {
    const { id } = req.params;
    const [[side]] = await Side.getOne(id);
    res.status(200).json(side);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteSide = async (req, res) => {
  try {
    const { id } = req.params;
    await Side.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllSides,
  deleteSide,
  getSide,
};
