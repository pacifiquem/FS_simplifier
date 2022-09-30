import express from 'express';
const router:express.Router = express.Router();
import multer from 'multer';
import { home,  uploadFile, downloadFile } from '../controller/file.controller';
import genIdentifier from '../middleware/identifierGen.middleware';


const upload = multer({dest: 'uploads/'});


router.route('/').get(home);
router.route('/file').post( upload.single("uploadedFile") , genIdentifier,  uploadFile );
router.route('/file/download/:identifier').post(downloadFile).get(downloadFile);

export default router;