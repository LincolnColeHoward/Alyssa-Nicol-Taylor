// imports
var mongoose = require ("mongoose");
mongoose.connect ("mongodb://localhost/alyssa");
var https = require ("https");
var fs = require ("fs");
var express = require ("express");
var app = express ();
app.use (require ("compression") ());

// thoughtful
var thoughtful = require ("thoughtful");
app.use (thoughtful.nodelib);
app.use (thoughtful.hit);

app.use (express.static ("assets/other"));
app.get ("/", function (req, res) {
	res.redirect ("/index.html");
});

app.use (express.static ("assets/src/js", {
 	maxage: "1728000000"
}));
app.use (express.static ("assets/src/css", {
 	maxage: "1728000000"
}));

app.use (require ("./data/images"));
app.use (require ("./data/graphics"));
app.use (require ("./data/contact"));

app.listen (80);

var forward = express ();
forward.all ("*", function (req, res) {
	res.redirect ("https://antaylorco.com" + req.url);
});

// forward.listen (80);

// var server = https.createServer ({
// 	key: fs.readFileSync ("./ssl/cert.key"),
// 	cert: fs.readFileSync ("./ssl/antaylorco.com/OtherServer/2_antaylorco.com.crt")
// }, app);
// server.listen (443);