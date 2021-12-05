const Salad = require('../models/salads');

const getAllSalads = async (req, res) => {
  try {
    const salads = await Salad.getAll();
    res.status(200).json(salads[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving salads');
  }
};

const getSalad = async (req, res) => {
  try {
    const { id } = req.params;
    const [salad] = await Salad.getOne(id);
    res.status(200).json(salad[0]);
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

const createSalad = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Salad.createOne(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating salad');
  }
};

const updateSalad = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Salad.updateOne(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating salad');
  }
};

module.exports = {
  getAllSalads,
  deleteSalad,
  createSalad,
  getSalad,
  updateSalad,
};
