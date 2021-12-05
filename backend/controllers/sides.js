const Side = require('../models/sides');

const getAllSides = async (req, res) => {
  try {
    const sides = await Side.getAll();
    res.status(200).json(sides[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving sides');
  }
};

const getSide = async (req, res) => {
  try {
    const { id } = req.params;
    const [side] = await Side.getOne(id);
    res.status(200).json(side[0]);
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

const createSide = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Side.createOne(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating side');
  }
};

const updateSide = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Side.updateOne(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating side');
  }
};

module.exports = {
  getAllSides,
  deleteSide,
  createSide,
  getSide,
  updateSide,
};
