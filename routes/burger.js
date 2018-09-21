const express = require('express');
const router = express.Router();

const burgerController = require('../controllers/burgerController');

router.get('/', burgerController.index);

module.exports = router;
