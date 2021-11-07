const Burger = require('../models/burgers');

const getAllBurgers = async (req, res) => {
  try {
    const burgers = await Burger.getAll();
    res.status(200).json(burgers[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving burgers');
  }
};

const getBurger = async (req, res) => {
  try {
    const { id } = req.params;
    const [burger] = await Burger.getOne(id);
    res.status(200).json(burger[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving burger infos');
  }
};

const deleteBurger = async (req, res) => {
  try {
    const { id } = req.params;
    await Burger.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting burger');
  }
};

const createBurger = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Burger.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating burger');
  }
};

const updateBurger = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Burger.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating burger');
  }
};

module.exports = {
  getAllBurgers,
  deleteBurger,
  createBurger,
  getBurger,
  updateBurger,
};
