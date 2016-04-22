/*reset.js*/
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
/*tabs.js*/
function tabConfig () {
	var tabs = {
		gallery: {btn: document.querySelector ("#galleryBtn"), tab: document.querySelector ("#galleryTab")},
		bio: {btn: document.querySelector ("#bioBtn"), tab: document.querySelector ("#bioTab")},
		cv: {btn: document.querySelector ("#cvBtn"), tab: document.querySelector ("#cvTab")}
	};
	var active = "bio";
	function activate (name) {
		tabs [active].btn.className = "";
		tabs [active].tab.className = "hidden";
		tabs [name].btn.className = "active";
		tabs [name].tab.className = "container-fluid tab";
		active = name;
	}
	activate (active);
	tabs.gallery.btn.onclick = function () {activate ("gallery"); if (galleryEmpty) galleryEmpty ()};
	tabs.bio.btn.onclick = function () {activate ("bio")};
	tabs.cv.btn.onclick = function () {activate ("cv"); if (!cvConfig) runCvConfig (); cvConfig ()};
}
tabConfig ();
/*gallery.js*/
var galleryEmpty;
function galleryConfig () {
	// find the necessary dom elements
	var yearlist = document.querySelector ("#galleryList");
	var thumbnail = document.querySelector ("#thumbnail");
	// index images and displays by year
	var index = {};
	var display = {};
	// obvious method
	function loadContent () {
		// get the number of galleries to load
		GET ("/galleries/length", function (data) {
			for (var i = 0; i < data; i++) {
				GET ("/galleries/" + i, function (data) {
					setIndex (data);
					createThumbnailItem (data);
				});
			}
		});
	}
	// index a gallery
	function setIndex (gallery) {
		if (!index [gallery.year]) {
			index [gallery.year] = [];
			display [gallery.year] = [];
			var td = yearlist.DOM ("tr").DOM ("td");
			td.innerHTML = gallery.year;
			td.onclick = yearOnclickEvt (gallery.year);
		}
		index [gallery.year].push (gallery);
	}
	// separate logic for creating the thumbnail 
	function createThumbnailItem (gallery) {
		var div = thumbnail.DOM ("div.hidden");
		var img = div.IMG (gallery.src);
		div.onclick = imgOnclickEvt (img, gallery);
		display [gallery.year].push (div);
	}
	// create an initial image function
	galleryEmpty = function () {
		var yearOpts = Object.keys (index);
		var i = Math.floor (Math.random () * yearOpts.length);
		i = yearOpts [i];
		showYear (i);
	}
	// hide all items in the thumbnail
	function hideAll () {
		var all = document.querySelectorAll ("div.thumbnail-item");
		for (var i = 0; i < all.length; i++)
			all [i].className = "hidden";
	}
	// show all images for a year
	function showYear (year) {
		var divs = display [year];
		var rand = Math.floor (Math.random () * divs.length);
		showImage (divs [rand].children [0], index [year][rand]);
		for (var i = 0; i < divs.length; i++)
			divs [i].className = "thumbnail-item";
	}
	// event for selecting a year
	function yearOnclickEvt (year) {
		return function () {
			hideAll ();
			showYear (year);
		}
	}
	// send an image over when clicked
	var main = document.querySelector ("#galleryMain");
	var title = document.querySelector ("#image_title");
	var copyright = document.querySelector ("#image_copyright");
	var dimensions = document.querySelector ("#image_dimensions");
	var media = document.querySelector ("#image_media");
	function showImage (img, data) {
			title.innerHTML = data.title || "";
			copyright.innerHTML = data.copyright || "";
			dimensions.innerHTML = data.dimensions || "";
			media.innerHTML = data.media || "";
			var clone = img.cloneNode ();
			main.innerHTML = "";
			main.appendChild (clone);
			galleryEmpty = false;
	}
	// wrap showImage for events
	function imgOnclickEvt (img, data) {
		return function () {
			showImage (img, data);
		}
	}
	loadContent ();
}
galleryConfig ();
/*cv.js*/
var cvConfig = null;
//initial code stolen from mozilla!
//thanks!
function runCvConfig () {
	//
	// get the container for the CV
	//
	var container = document.querySelector ("#cvContainer");
	
	// 
	// If absolute URL from the remote server is provided, configure the CORS
	// header on that server.
	//
	var url = "other/CV.pdf";

	//
	// Disable workers to avoid yet another cross-origin issue (workers need
	// the URL of the script to be loaded, and dynamically loading a cross-origin
	// script does not work).
	//
	// PDFJS.disableWorker = true;

	//
	// The workerSrc property shall be specified.
	//
	PDFJS.workerSrc = "build/pdf.worker.js";

	//
	// Asynchronous download PDF
	//
	PDFJS.getDocument (url).then (function getPdfHelloWorld (pdf) {
	  //
	  // Fetch the first page
	  //
	  pdf.getPage (1).then(function getPageHelloWorld (page) {
	    cvConfig = function () {
		    var viewport = page.getViewport (1);
		    var scale = container.clientWidth / viewport.width;
		    var viewport = page.getViewport (scale);
		    //
		    // Prepare canvas using PDF page dimensions
		    //
		    var canvas = document.querySelector ("#CV");
		    var context = canvas.getContext ("2d");
		    canvas.height = viewport.height;
		    canvas.width = viewport.width;
		    //
		    // Render PDF page into canvas context
		    //
		    var renderContext = {
		      canvasContext: context,
		      viewport: viewport
		    };
		    page.render (renderContext);
		 	}
		});
	});
}
runCvConfig ();
// call cvConfig when activating the tab