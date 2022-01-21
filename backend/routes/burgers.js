const express = require('express');
const router = express.Router();
const burgersController = require('../controllers/burgers');
const verifyJWT = require('../middlewares/verifyJWT');
const verifyRole = require('../middlewares/verifyRole');

router.get('/', burgersController.getAllBurgers);
router.get('/:id', burgersController.getBurger);
router.post('/', verifyJWT, verifyRole, burgersController.createBurger);
router.delete('/:id', verifyJWT, verifyRole, burgersController.deleteBurger);

module.exports = router;
