const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: './.env'});

const db_connection = () => {
    const conn = mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

    if(conn) {
        console.log(`db connected sucessfully`);
    }else {
        console.log(`db failed`);
        process.exit();
    }
}

module.exports = db_connection