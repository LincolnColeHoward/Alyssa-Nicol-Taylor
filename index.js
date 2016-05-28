// express
var express = require ("express");
var app = express ();
app.use (require ("compression") ());


app.use (express.static ("assets/other"));
app.get ("/", function (req, res) {
	res.redirect ("/index.html");
});

// app.use (express.static ("assets/build", {
//  	maxage: "1728000000"
// }));

app.use (express.static ("assets/src/js"));
app.use (express.static ("assets/src/css"));

app.use (require ("./data/images"));
app.use (require ("./data/graphics"));
app.use (require ("./data/contact"));

app.listen (80);