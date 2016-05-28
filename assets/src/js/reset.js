// create a dom element
function DOM (element) {
	var list = element.split (".");
	var ret = document.createElement (list [0]);
	for (var i = 1; i < list.length; i++)
		ret.classList.add (list [i]);
	return ret;
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
// post
function POST (route, data, cb, err) {
	var xhr = new XMLHttpRequest ();
	xhr.open ("POST", route);
	xhr.setRequestHeader ("Content-Type", "application/json");
	xhr.onload = function () {
		if (xhr.status === 201) {
			if (!this.response) return cb ();
			if (cb) cb (JSON.parse (this.response));
		} else {
			if (err) err (xhr.status);
		}
	}
	xhr.send (JSON.stringify (data));
}
// expanding textarea elements
function Expander (textarea) {
	textarea.addEventListener ("keyup", function () {
		this.style.height = 0;
		this.style.height = this.scrollHeight + "px";
	}, false);
}
document.addEventListener("DOMContentLoaded", function () {
	var txts = document.querySelectorAll ("textarea.expander")
	for (var i = 0; i < txts.length; i++)
		Expander (txts [i]);
}, false);
document.querySelector ("#modal").onclick = function () {
	this.className = modal;
	this.innerHTML = "";
}