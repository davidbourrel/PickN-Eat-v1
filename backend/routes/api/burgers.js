const express = require('express');
const router = express.Router();
const burgersController = require('../../controllers/burgers');

router.route('/').get(burgersController.getAllBurgers);

router.route('/:id').get(burgersController.getBurger);

module.exports = router;
