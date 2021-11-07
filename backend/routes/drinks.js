const express = require('express');

const router = express.Router();
const {
  getAllDrinks,
  getDrink,
  deleteDrink,
  createDrink,
  updateDrink,
} = require('../controllers/drinks');

router.get('/', getAllDrinks);
router.get('/:id', getDrink);
router.delete('/:id', deleteDrink);
router.post('/', createDrink);
router.put('/:id', updateDrink);

module.exports = router;
