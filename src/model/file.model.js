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
        required: true,
        minLength: [6, "password must be atleast 6 characters long"],
        maxLength: ['password can\'t be above 12 characters long'] 
    },

    identifier: {
        type: String, 
        required: true, 
        unique: true
    },

    downloadsCount: {
        type: Number,
        default: 0
    },
    
    sharedAt: {
        type: Date,
        default: Date.now()
    }
    
});


module.exports.FileSchema = mongoose.model('file', FileSchema);