//Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Set up server
var server = app.listen(8080, function() {
    console.log('Server running at http://localhost:' + server.address().port);
});