const express = require('express');
const router = express.Router();
const burgersController = require('../../../controllers/burgers');

router.route('/').post(burgersController.createBurger);

router.route('/:id').delete(burgersController.deleteBurger);

module.exports = router;
