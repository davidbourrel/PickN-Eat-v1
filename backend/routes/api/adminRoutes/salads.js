const express = require('express');
const router = express.Router();
const saladsController = require('../../../controllers/salads');

router.route('/:id').delete(saladsController.deleteSalad);

module.exports = router;
