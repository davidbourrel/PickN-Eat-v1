const express = require('express');
const router = express.Router();
const drinksController = require('../controllers/drinks');
const verifyJWT = require('../middlewares/verifyJWT');
const verifyRole = require('../middlewares/verifyRole');

router.get('/', drinksController.getAllDrinks);
router.get('/:id', drinksController.getDrink);
router.delete('/:id', verifyJWT, verifyRole, drinksController.deleteDrink);

module.exports = router;
