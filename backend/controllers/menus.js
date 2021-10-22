const Menu = require('../models/menus');

const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.getAll();
    res.status(200).json(menus[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving menus');
  }
};

const getMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const [menu] = await Menu.getOne(id);
    res.status(200).json(menu[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving menu infos');
  }
};

const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    await Menu.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting menu');
  }
};

const createMenu = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Menu.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating menu');
  }
};

const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Menu.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating menu');
  }
};

module.exports = {
  getAllMenus,
  deleteMenu,
  createMenu,
  getMenu,
  updateMenu,
};
