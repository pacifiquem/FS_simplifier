import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path: `${__dirname}/.env`
});

const db_connection = async() => {
    try {
        const conn = await mongoose.connect(`${process.env.DB_URL}`);

        if(conn) {
            console.log(`db connected sucessfully`);
        }else {
            console.log(`db failed`);
            process.exit();
        }
    } catch (error) {
        console.log(error);
    }
}

export default db_connection