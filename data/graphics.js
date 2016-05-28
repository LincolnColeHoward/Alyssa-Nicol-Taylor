// get the data
var xlsx = require ("node-xlsx");
var fs = require ("fs");
var data = [];
function update () {
	data = [];
	var input = xlsx.parse (__dirname + "/graphics.xlsx") [0].data;
	input.splice (0, 1);
	for (var i = 0; i < input.length; i++) {
		data.push ({
			file: input [i][0],
			src: "graphics/" + i,
			title: input [i][1],
			copyright: input [i][2],
			year: input [i][3],
			media: input [i][4],
			dimensions: input [i][5]
		});
	}
}
update ();

var express = require ("express");
var router = express.Router ();

router.get ("/graphics", function (req, res) {
	res.setHeader ("Cache-Control", "max-age=172800");
	res.status (200).json (data);
});

router.get ("/graphics/length", function (req, res) {
	res.setHeader ("Cache-Control", "max-age=1728000");
	res.status (200).json (data.length); 
});

router.get ("/graphics/:index", function (req, res) {
	res.setHeader ("Cache-Control", "max-age=172800");
	res.status (200).json (data [req.params.index]);
});

router.get ("/images/:index", function (req, res) {
	res.setHeader ("Cache-Control", "max-age=172800");
	var read = fs.createReadStream (__dirname + "/../images/" + data [req.params.index].file);
	read.pipe (res);
});

module.exports = router;