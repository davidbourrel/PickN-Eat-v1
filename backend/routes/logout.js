const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logout');

router.post('/', logoutController.handleLogout);

module.exports = router;
