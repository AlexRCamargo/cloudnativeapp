const express = require('express');
const router = express.Router();
const productMessage = 'Product list';

router.get('/', (req, res) => {
    res.send(welcomeMessage);
});

module.exports = router;
