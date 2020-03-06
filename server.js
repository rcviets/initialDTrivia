//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const logger = require('morgan');

//Require Database Models

//Import Routes

//Create Port
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoTrivia';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//Initialize
const app = express();

//Middleware

//Logging Requests
app.use(logger('dev'));

//Parse Body into JSON
app.use(express.urlencoded({ extended: true }));
appp.use(express.json());

//Static Folder
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(`🌎 ==> Server Running On Port ${PORT}!`);
});

module.exports = app;