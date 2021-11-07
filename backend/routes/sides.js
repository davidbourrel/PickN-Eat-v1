const express = require('express');

const router = express.Router();
const {
  getAllSides,
  getSide,
  deleteSide,
  createSide,
  updateSide,
} = require('../controllers/sides');

router.get('/', getAllSides);
router.get('/:id', getSide);
router.delete('/:id', deleteSide);
router.post('/', createSide);
router.put('/:id', updateSide);

module.exports = router;
