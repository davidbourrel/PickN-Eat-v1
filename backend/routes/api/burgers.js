const express = require('express');
const router = express.Router();
const burgersController = require('../../controllers/burgers');
const verifyJWT = require('../../middlewares/verifyJWT');

router
  .route('/')
  .get(burgersController.getAllBurgers)
  .post(verifyJWT, burgersController.createBurger);

router
  .route('/:id')
  .get(burgersController.getBurger)
  .delete(verifyJWT, burgersController.deleteBurger);

module.exports = router;
