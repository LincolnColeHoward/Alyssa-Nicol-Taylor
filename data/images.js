// get the data
var xlsx = require ("node-xlsx");
var fs = require ("fs");
var data = [];
function update () {
	data = [];
	var input = xlsx.parse (__dirname + "/images.xlsx") [0].data;
	input.splice (0, 1);
	for (var i = 0; i < input.length; i++) {
		data.push ({
			file: input [i][0],
			src: "images/" + i,
			title: input [i][1],
			description: input [i][2],
			copyright: input [i][3],
			year: input [i][4],
			media: input [i][5],
			dimensions: input [i][6]
		});
	}
}
update ();

var express = require ("express");
var router = express.Router ();

router.get ("/galleries", function (req, res) {
	res.status (200).json (data);
});

router.get ("/galleries/length", function (req, res) {
	res.status (200).json (data.length); 
});

router.get ("/galleries/:index", function (req, res) {
	res.status (200).json (data [req.params.index]);
});

router.get ("/images/:index", function (req, res) {
	var read = fs.createReadStream (__dirname + "/../images/" + data [req.params.index].file);
	read.pipe (res);
});

module.exports = router;