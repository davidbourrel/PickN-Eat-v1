const express = require('express');

const router = express.Router();
const {
  getAllFavorites,
  deleteFavorite,
  createFavorite,

  updateFavorite,
} = require('../controllers/favorites');

router.get('/:id', getAllFavorites);
router.delete('/:id', deleteFavorite);
router.post('/', createFavorite);
router.put('/:id', updateFavorite);

module.exports = router;
