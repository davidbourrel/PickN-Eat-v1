const express = require('express');

const router = express.Router();
const {
  getAllBurgers,
  getBurger,
  deleteBurger,
  createBurger,
  updateBurger,
} = require('../controllers/burgers');

router.get('/', getAllBurgers);
router.get('/:id', getBurger);
router.delete('/:id', deleteBurger);
router.post('/', createBurger);
router.put('/:id', updateBurger);

module.exports = router;
