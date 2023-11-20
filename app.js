const express = require ('express');
const app = express();
let cookieParser = require ('cookie-parser');
let session = require ('express-session');
let bodyParser = require('body-parser');


app.use(cookieParser())
.use(session({secret:'todotopsecret', resave:true, saveUninitialized:true}))
.use(bodyParser.urlencoded({extended:true}))
.use(bodyParser.json())

module.exports = app;