const express = require('express');
const router = express.Router();
const sidesController = require('../../../controllers/sides');

router.route('/:id').delete(sidesController.deleteSide);

module.exports = router;
