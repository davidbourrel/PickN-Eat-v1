const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/refreshToken');

router.post('/', refreshTokenController.handleRefreshToken);

module.exports = router;
