const express = require('express');
const router = express.Router();
const saladsController = require('../../controllers/salads');
const verifyJWT = require('../../middlewares/verifyJWT');

router.route('/').get(saladsController.getAllSalads);

router
  .route('/:id')
  .get(saladsController.getSalad)
  .delete(verifyJWT, saladsController.deleteSalad);

module.exports = router;
