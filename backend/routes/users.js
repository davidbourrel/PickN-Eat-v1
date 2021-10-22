const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  deleteUser,
  createUser,
  getUser,
  updateUser,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router;
