const express = require('express');

const router = express.Router();

const burgerController = require('../controllers/burgerController');

router.get('/', burgerController.index);

router.post('/api/burgers', burgerController.createBurger);

router.put('/api/burgers/:id', burgerController.updateBurger);

module.exports = router;
