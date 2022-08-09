const bcrypt = require('bcrypt');

const hash = async (input) => {

    const salt = await bcrypt.genSalt(10);
    const output = await bcrypt.hash(input, salt);

    return await output;
}

module.exports = hash;