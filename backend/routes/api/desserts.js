const express = require('express');
const router = express.Router();
const dessertsController = require('../../controllers/desserts');
const verifyJWT = require('../../middlewares/verifyJWT');

router.route('/').get(dessertsController.getAllDesserts);

router
  .route('/:id')
  .get(dessertsController.getDessert)
  .delete(verifyJWT, dessertsController.deleteDessert);

module.exports = router;
