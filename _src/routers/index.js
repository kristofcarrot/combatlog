const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.init);
router.post('/', mainController.inputData);

module.exports = router;