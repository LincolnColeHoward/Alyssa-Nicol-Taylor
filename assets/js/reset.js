// create a dom element
function DOM (element) {
	var list = element.split (".");
	var ret = document.createElement (list [0]);
	for (var i = 1; i < list.length; i++)
		ret.classList.add (list [i]);
	return ret;
}
// load a css stylesheet or js script
function loadcss (href) {
	var head = document.querySelectorAll ("head") [0];
	var ss = DOM ("link");
	ss.href = href;
	ss.rel = "stylesheet";
	ss.media = "only x";
	head.appendChild (ss);
	setTimeout (function () {
		ss.media = "all";
	}, 0);
}
function loadjs (src) {
	document.body.DOM ("script").src = src;
}
// create a dom element that is a child of this
Element.prototype.DOM = function (element) {
	var ret = DOM (element);
	this.appendChild (ret);
	return ret;
}
Element.prototype.IMG = function (src) {
	var image = new Image ();
	if (src) image.src = src;
	this.appendChild (image);
	return image;
}
// move an element from one parent to another
function MOVE (element, node) {
	element.parentNode.removeChild (element);
	node.appendChild (element);
}
// move this to another node
Element.prototype.MOVE = function (node) {
	MOVE (this, node);
}
// routes
function GET (route, cb, err) {
	var xhr = new XMLHttpRequest ();
	xhr.open ("GET", route);
	xhr.onload = function () {
		if (xhr.status === 200) {
			if (cb) cb (JSON.parse (this.response));
		} else {
			if (err) err (xhr.status);
		}
	}
	xhr.send ();
}