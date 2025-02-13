const express = require('express');
const router = express.Router();
const tasks = require('./task');

router.use('/', tasks);

module.exports = router;