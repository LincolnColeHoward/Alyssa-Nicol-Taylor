// express
var express = require ("express");
var app = express ();
app.use (require ("compression") ());
app.use (express.static ("assets", {
	maxage: "1728000000"
}));
app.get ("/", function (req, res) {
	res.redirect ("/index.html");
});

app.use (require ("./data/images"));

app.listen (80);