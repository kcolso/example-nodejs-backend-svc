/* jshint node: true */
"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept,Origin,Referer,User-Agent');
	next();
});

routes(app);

var server = app.listen(3000, function() {
	console.log("Listening on port %s...", server.address().port);
});