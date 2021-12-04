const express = require('express');
const router = express.Router();
const drinksController = require('../../controllers/drinks');

router
  .route('/')
  .get(drinksController.getAllDrinks)
  .post(drinksController.createDrink);

router
  .route('/:id')
  .get(drinksController.getDrink)
  .put(drinksController.updateDrink)
  .delete(drinksController.deleteDrink);

module.exports = router;
