const express = require('express');

const router = express.Router();

const { handleLogin } = require('../controllers/authentification');

router.post('/', handleLogin);

module.exports = router;
