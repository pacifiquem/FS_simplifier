const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
        unique: true, 
        minLength: 2, 
        maxLength: 30
    },

    file_url: {
        type: String,
        required: true,
        unique: true, 
        maxLength: 200,
        match: '/^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g'
    },

    downloads: {
        type: Number,
        default: 0
    },

    sharedAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports.FileSchema = mongoose.model('file', FileSchema);