const Favorite = require('../models/favorites');

const getAllFavorites = async (req, res) => {
  try {
    const { id } = req.params;
    const favorites = await Favorite.getAll(id);
    res.status(200).json(favorites[0]);
  } catch (error) {
    console.log('favorits ', error);
    res.status(500).send('An error occured while retrieving favorites');
  }
};

const getFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const [favorite] = await Favorite.getOne(id);
    res.status(200).json(favorite[0]);
  } catch (error) {
    console.log('favorits ', error);
    res.status(500).send('An error occured while retrieving favorite infos');
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log('favorits ', error);
    res.status(500).send('An error occured while deleting favorite');
  }
};

const createFavorite = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Favorite.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log('favorits ', error);
    res.status(500).send('An error occured while creating favorite');
  }
};

const updateFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Favorite.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log('favorits ', error);
    res.status(500).send('An error occured while updating favorite');
  }
};

module.exports = {
  getAllFavorites,
  deleteFavorite,
  createFavorite,
  getFavorite,
  updateFavorite,
};
