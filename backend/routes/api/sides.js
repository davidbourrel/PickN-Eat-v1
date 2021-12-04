const express = require('express');
const router = express.Router();
const sidesController = require('../../controllers/sides');

router
  .route('/')
  .get(sidesController.getAllSides)
  .post(sidesController.createSide);

router
  .route('/:id')
  .get(sidesController.getSide)
  .put(sidesController.updateSide)
  .delete(sidesController.deleteSide);

module.exports = router;
