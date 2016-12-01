// imports
var https = require ("https");
var fs = require ("fs");
var express = require ("express");
var app = express ();
app.use (require ("compression") ());

app.use (require ("reset.js"));

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

var forward = express ();
forward.all ("*", function (req, res) {
	res.redirect ("https://antaylorco.com" + req.url);
});

forward.listen (80);

var server = https.createServer ({
	key: fs.readFileSync ("/etc/letsencrypt/live/antaylorco.com/privkey.pem"),
	cert: fs.readFileSync ("/etc/letsencrypt/live/antaylorco.com/cert.pem")
}, app);
server.listen (443);