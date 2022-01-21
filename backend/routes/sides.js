const express = require('express');
const router = express.Router();
const sidesController = require('../controllers/sides');
const verifyJWT = require('../middlewares/verifyJWT');
const verifyRole = require('../middlewares/verifyRole');

router.get('/', sidesController.getAllSides);
router.get('/:id', sidesController.getSide);
router.delete('/:id', verifyJWT, verifyRole, sidesController.deleteSide);

module.exports = router;
