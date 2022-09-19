const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
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
                data: req.identifier
            });

        }

    } catch (error) {
        next(error);
    }

};

exports.downloadFile = async (req, res, next) => {
    try {

        if(req.body.password != undefined) {

            const file = await FileSchema.findOne({
                identifier: cryptoHash(req.params.identifier)
            });
        
            if(file != undefined) {
                if(await bcrypt.compare(req.body.password, file.password)) {
    
                    res.download(file.file_path, file.fileOrginalName);
                    file.downloadsCount++;
                    await file.save();
    
                }else {
                    res.json({
                        success: false,
                        message: 'invalid password'
                    });
                }
            }
    
        }else {
            res.render('downloadView');
        }

    } catch (error) {
        next(error);
    }
};