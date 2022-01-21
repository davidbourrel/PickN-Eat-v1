const express = require('express');
const router = express.Router();
const dessertsController = require('../controllers/desserts');
const verifyJWT = require('../middlewares/verifyJWT');
const verifyRole = require('../middlewares/verifyRole');

router.get('/', dessertsController.getAllDesserts);
router.get('/:id', dessertsController.getDessert);
router.delete('/:id', verifyJWT, verifyRole, dessertsController.deleteDessert);

module.exports = router;
