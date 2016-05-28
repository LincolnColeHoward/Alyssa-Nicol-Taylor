var NM = require ("nodemailer");
var CSTR = require ("../email.json").string;

var transporter = NM.createTransport (CSTR);
var express = require ("express");
var router = express.Router ();
router.use (require ("body-parser").json ());

router.post ("/contact", function (req, res) {
	if (typeof req.body.name !== "string" || req.body.name === "" ||
		typeof req.body.email !== "string" || req.body.email === "" ||
		typeof req.body.subject !== "string" || req.body.subject === "" ||
		typeof req.body.message !== "string" || req.body.message === "") {
		return res.status (401).end ();
	}
	var opts = {
		to: require ("../email.json").to,
		from: req.body.name + "<" + req.body.email + ">",
		subject: req.body.subject,
		text: req.body.message
	}
	console.log (opts);
	transporter.sendMail (opts, function (err, info) {
		if (err) return res.status (401).end ();
		res.status (201).json ({});
	});
});

module.exports = router;