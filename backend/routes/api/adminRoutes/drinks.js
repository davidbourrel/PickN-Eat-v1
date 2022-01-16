const express = require('express');
const router = express.Router();
const drinksController = require('../../../controllers/drinks');

router.route('/:id').delete(drinksController.deleteDrink);

module.exports = router;
