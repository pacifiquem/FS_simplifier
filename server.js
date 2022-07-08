const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});

const db_connection = require('./config/db.config');
const app = express();
db_connection();





app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} at ${process.env.PORT}`));