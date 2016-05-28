var NM = require ("nodemailer");
var CSTR = require ("../email.json").string;

var transporter = NM.createTransport (CSTR);
var express = require ("express");
var router = express.Router ();
router.use (require ("body-parser").json ());

router.post ("/contact", function (req, res) {
	var opts = {
		to: "antaylorco@gmail.com",
		from: req.body.name + "<" + req.body.email + ">",
		subject: req.body.subject,
		text: req.body.message
	}
	console.log (opts);
	transporter.sendMail (opts, function (err, info) {
		if (err) return res.status (401);
		res.status (201);
	});
	res.status (201).json ({});
});

module.exports = router;