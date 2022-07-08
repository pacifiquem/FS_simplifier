const express = require('express');
const router = express.Router();

const { home } = require('../controller/file.controller');

router.route('/').get(home);

module.exports = router