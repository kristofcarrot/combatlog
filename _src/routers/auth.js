const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('auth page');
});

router.get('/registration', function (req, res) {
    res.send('registration page');
});

module.exports = router;