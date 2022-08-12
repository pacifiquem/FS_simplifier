const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});
const ejs = require('ejs');
const mongoose = require('mongoose');

const db_connection = require('./config/db.config');
const file_router = require('./routes/file.router');
const app = express();


db_connection();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({urlencoded: true}));
app.use(express.static('public'));
app.use('/', file_router);




app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} at ${process.env.PORT}`));