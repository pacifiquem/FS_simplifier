import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    addedDate: {
        type: Date,
        default: new Date()
    }
});


export const ContactModel = mongoose.model('Contact', ContactSchema);
