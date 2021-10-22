const express = require('express');

const router = express.Router();
const {
  getAllRoles,
  deleteRole,
  createRole,
  getRole,
  updateRole,
} = require('../controllers/roles');

router.get('/', getAllRoles);
router.get('/:id', getRole);
router.delete('/:id', deleteRole);
router.post('/', createRole);
router.put('/:id', updateRole);

module.exports = router;
