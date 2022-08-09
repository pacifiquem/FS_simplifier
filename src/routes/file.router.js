const express = require('express');
const router = express.Router();
const multer = require('multer');
const genIdentifier = require('../middleware/identifierGen.middleware')


const upload = multer({dest: 'uploads/'});

const { home, uploadFile, downloadFile } = require('../controller/file.controller');

router.route('/').get(home);
router.route('/file').post( genIdentifier, upload.single("uploadedFile") , uploadFile );
router.route('/file/:identifier').get(downloadFile);

module.exports = router;