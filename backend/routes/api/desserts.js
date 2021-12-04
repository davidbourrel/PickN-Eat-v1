const express = require('express');
const router = express.Router();
const dessertsController = require('../../controllers/desserts');

router
  .route('/')
  .get(dessertsController.getAllDesserts)
  .post(dessertsController.createDessert);

router
  .route('/:id')
  .get(dessertsController.getDessert)
  .put(dessertsController.updateDessert)
  .delete(dessertsController.deleteDessert);

module.exports = router;
