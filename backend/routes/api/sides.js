const express = require('express');
const router = express.Router();
const sidesController = require('../../controllers/sides');

router.route('/').get(sidesController.getAllSides);

router
  .route('/:id')
  .get(sidesController.getSide)
  .delete(sidesController.deleteSide);

module.exports = router;
