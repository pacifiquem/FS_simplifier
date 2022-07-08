const mongoose = require('mongoose');
const ejs = require('ejs');

exports.home = async(req, res, next) => {
    res.render('home');
}