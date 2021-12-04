const express = require('express');
const router = express.Router();
const saladsController = require('../../controllers/salads');

router
  .route('/')
  .get(saladsController.getAllSalads)
  .post(saladsController.createSalad);

router
  .route('/:id')
  .get(saladsController.getSalad)
  .put(saladsController.updateSalad)
  .delete(saladsController.deleteSalad);

module.exports = router;
