const express = require('express');

const router = express.Router();
const {
  getAllMenus,
  getMenu,
  deleteMenu,
  createMenu,
  updateMenu,
} = require('../controllers/menus');

router.get('/', getAllMenus);
router.get('/:id', getMenu);
router.delete('/:id', deleteMenu);
router.post('/', createMenu);
router.put('/:id', updateMenu);

module.exports = router;
