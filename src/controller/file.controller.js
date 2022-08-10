const mongoose = require('mongoose');
const crypto = require('crypto');
const { FileSchema } = require('../model/file.model');
const hash = require('../utils/hash.utils');
const cryptoHash = require('../utils/cryptoHash.utils');

exports.home = ( async(req, res, next) => {
    res.render('home');
});


exports.uploadFile = async(req, res, next) => {
    
    try {

        if(req.file && req.body.password) {
            
            const { originalname, path } = req.file;
            const password = await hash(req.body.password);;

            const file = await FileSchema.create({
                fileOrginalName: originalname,
                file_path: path, 
                password,
                identifier: cryptoHash(req.identifier)
            });

            res.status(200).json({
                success: true, 
                data: file.identifier
            });

        }

    } catch (error) {

        next(error);

    }

};

exports.downloadFile = async (req, res, next) => {

    console.log(req);

    if(req.route.methods.post === true) {

        const file = await FileSchema.findOne({
            identifier: cryptoHash(req.params.identifier)
        });
    
        if((file != null && file != undefined) && (file.file_path != null && file.file_path != undefined)) {
    
            res.download(file.file_path);
            file.downloadsCount++;
    
            await file.save();
    
        }
    }else {
        console.log(req.route.methods);
        res.render('downloadView');
    }

};