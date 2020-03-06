//Dependencies
let express = require('express');
let mongoose = require('mongoose');
let axios = require('axios');
let logger = require('morgan');

//Require Database Models

//Import Routes

//Create Port
let PORT = process.env.PORT || 3000;

//Initialize
let app = express();

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