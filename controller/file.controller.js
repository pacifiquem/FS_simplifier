const mongoose = require('mongoose');
const crypto = require('crypto');
const { FileSchema } = require('../model/file.model');
const hash = require('../utils/hash.utils');
const genIdentifier = require('../middleware/identifierGen.middleware');

exports.home = ( async(req, res, next) => {
    res.render('home');
});


exports.file = async(req, res, next) => {
    
    try {

        if(req.file || req.body.password) {
            
            const { originalname, path } = req.file;
            const password = await hash(req.body.password);;

            const file = await FileSchema.create({
                fileOrginalName: originalname,
                file_path: path, 
                password,
                identifier: await hash(req.identifier)
            });

            res.redirect(`/file/${req.identifier}`);

        }

    } catch (error) {

        console.log(error)
        res.send('sorry');

    }

};