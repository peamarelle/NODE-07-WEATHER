const { Router } = require('express');
const {
    cities
} = require('../controllers/weather');

const router = Router();

router.get('/:city', cities);

module.exports = router;