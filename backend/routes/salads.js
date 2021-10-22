const express = require('express');

const router = express.Router();
const {
  getAllSalads,
  getSalad,
  deleteSalad,
  createSalad,
  updateSalad,
} = require('../controllers/salads');

router.get('/', getAllSalads);
router.get('/:id', getSalad);
router.delete('/:id', deleteSalad);
router.post('/', createSalad);
router.put('/:id', updateSalad);

module.exports = router;
