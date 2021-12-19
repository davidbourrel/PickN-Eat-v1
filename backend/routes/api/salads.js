const express = require('express');
const router = express.Router();
const saladsController = require('../../controllers/salads');

router.route('/').get(saladsController.getAllSalads);

router.route('/:id').get(saladsController.getSalad);

module.exports = router;
