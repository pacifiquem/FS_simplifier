const crypto = require('crypto');
const dotenv = require('dotenv').config({path: '../config/.env'});

const cryptoHash = (input) => {

    const output = crypto.
                    createHmac('sha256', process.env.CRYPTO_SECRET)
                    .update(input)
                    .digest('hex');

    
    return output;
}

module.exports = cryptoHash;