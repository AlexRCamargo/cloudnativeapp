const express = require('express');
const app = express();
const router = require('./routers');

app.use(express.json());

app.get('/', router);

module.exports = app;
