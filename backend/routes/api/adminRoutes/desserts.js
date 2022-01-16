const express = require('express');
const router = express.Router();
const dessertsController = require('../../../controllers/desserts');

router.route('/:id').delete(dessertsController.deleteDessert);

module.exports = router;
