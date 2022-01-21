const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const verifyJWT = require('../middlewares/verifyJWT');

router.get('/:id', verifyJWT, usersController.getUser);
router.put('/:id', verifyJWT, usersController.updateUser);
router.delete('/:id', verifyJWT, usersController.deleteUser);

module.exports = router;
