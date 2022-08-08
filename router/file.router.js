const express = require('express');
const router = express.Router();
const multer = require('multer');


const upload = multer({dest: 'uploads/'});

const { home, file } = require('../controller/file.controller');

router.route('/').get(home);
router.route('/file').post( upload.single("uploadedFile") , file );

module.exports = router