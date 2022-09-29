import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: `${path.join(`${__dirname}`, '..', '/config/.env')}`
});

const cryptoHash = (input:string) => {

    const output = crypto.
                    createHmac('sha256', `${process.env.CRYPTO_SECRET}`)
                    .update(input)
                    .digest('hex');
    
    return output;
}

export default cryptoHash;