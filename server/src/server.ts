import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config({
    path: `${__dirname}/config/.env`
});

import db_connection from './config/db.config';
import file_router from './routes/file.router';
import ExpressMongoSanitize from 'express-mongo-sanitize';
const app:express.Application = express();


db_connection();

app.use(cors());
app.use(helmet());
app.use(ExpressMongoSanitize);
app.use(express.json());
app.use(express. urlencoded({extended: true}));
app.use('/', file_router);



app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} at ${process.env.PORT}`));