const express = require('express');
const router = express.Router();
const dessertsController = require('../../controllers/desserts');

router.route('/').get(dessertsController.getAllDesserts);

router.route('/:id').get(dessertsController.getDessert);

module.exports = router;
