const express = require('express');
const router = express.Router();
const drinksController = require('../../controllers/drinks');
const verifyJWT = require('../../middlewares/verifyJWT');

router.route('/').get(drinksController.getAllDrinks);

router
  .route('/:id')
  .get(drinksController.getDrink)
  .delete(verifyJWT, drinksController.deleteDrink);

module.exports = router;
