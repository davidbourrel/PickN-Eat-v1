const express = require('express');

const router = express.Router();
const {
  getAllDesserts,
  getDessert,
  deleteDessert,
  createDessert,
  updateDessert,
} = require('../controllers/desserts');

router.get('/', getAllDesserts);
router.get('/:id', getDessert);
router.delete('/:id', deleteDessert);
router.post('/', createDessert);
router.put('/:id', updateDessert);

module.exports = router;
