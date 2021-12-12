const express = require('express');
const router = express.Router();
const sidesController = require('../../controllers/sides');
const verifyJWT = require('../../middlewares/verifyJWT');

router.route('/').get(sidesController.getAllSides);

router
  .route('/:id')
  .get(sidesController.getSide)
  .delete(verifyJWT, sidesController.deleteSide);

module.exports = router;
