import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config({
    path: `${__dirname}/config/.env`
});

const db_connection = require('./config/db.config');
const file_router = require('./routes/file.router');
const app:express.Application = express();


db_connection();
app.use(express.json());
app.use(express. urlencoded({extended: true}));
app.use('/', file_router);



app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} at ${process.env.PORT}`));