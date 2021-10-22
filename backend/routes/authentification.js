const express = require('express');

const router = express.Router();

const { autentificationCheck } = require('../controllers/authentification');

router.post('/', autentificationCheck);

module.exports = router;
