const express = require('express');
const router = express.Router();
const saladsController = require('../controllers/salads');
const verifyJWT = require('../middlewares/verifyJWT');
const verifyRole = require('../middlewares/verifyRole');

router.get('/', saladsController.getAllSalads);
router.get('/:id', saladsController.getSalad);
router.delete('/:id', verifyJWT, verifyRole, saladsController.deleteSalad);

module.exports = router;
