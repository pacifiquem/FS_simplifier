const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    
    fileOrginalName: {
        type: String,
        required: true,
        minLength: 1, 
        maxLength: 200
    },

    file_path: {
        type: String,
        required: true,
        unique: true, 
    },

    password: {
        type: String, 
        required: false
    },

    identifier: {
        type: String, 
        required: true
    },

    sharedAt: {
        type: Date,
        default: Date.now()
    },
    
    downloadsCount: {
        type: Number,
        default: 0
    }
});


module.exports.FileSchema = mongoose.model('file', FileSchema);