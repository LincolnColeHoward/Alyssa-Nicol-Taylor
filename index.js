// express
var express = require ("express");
var app = express ();
app.use (express.static ("assets"));

app.get ("/", function (req, res) {
	res.redirect ("/index.html");
});

app.use (require ("./data/images"));

app.listen (80);