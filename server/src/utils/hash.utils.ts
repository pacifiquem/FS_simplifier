import bcrypt from 'bcrypt';

const hash = async (input:string) => {

    const salt = await bcrypt.genSalt(10);
    const output = await bcrypt.hash(input, salt);

    return await output;
}

export default hash;