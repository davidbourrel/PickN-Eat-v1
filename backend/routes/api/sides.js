const express = require('express');
const router = express.Router();
const sidesController = require('../../controllers/sides');

router.route('/').get(sidesController.getAllSides);

router.route('/:id').get(sidesController.getSide);

module.exports = router;
