const mongoose = require('mongoose');
const crypto = require('crypto');
const { FileSchema } = require('../model/file.model');
const hash = require('../utils/hash.utils');

exports.home = ( async(req, res, next) => {
    res.render('home');
});


exports.file = async(req, res, next) => {
    try {

        if(req.file && req.body.password) {
            
            const { originalname, path } = req.file;
            const password = await hash(req.body.password);
            let identifier = crypto.createHmac('sha256', process.env.CRYPTO_SECRET).update(originalname).digest('hex');

            

            const file = await FileSchema.create({
                fileOrginalName: originalname,
                file_path: path, 
                password,
                identifier: await hash(identifier)
            });

            console.log(identifier);
            res.redirect(`/${identifier}`);
            }

    } catch (error) {
        console.log(error)
        res.send('sorry');
    }

};